import Stack from "@mui/material/Stack";
import Slide from "@mui/material/Slide";
import { useEffect, useState } from "react";
import { Link, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useCartContext } from "../../context/cart/provider";
import classes from "./order.module.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../utils/fetcher";
import { OrderCard } from "../../components/order-card";
import { formatPrice } from "../../utils/format-price";

export const OrderLayout = () => {
  const { search } = useLocation();
  const { pathname } = useLocation();
  const { total_items, cart, total_amount } = useCartContext();
  const [open, setOpen] = useState(false);
  const isOrderPage =
    pathname === "/order" ||
    pathname === "/w2/order" ||
    pathname === "/w3/order";
  const isNewView = pathname.includes("w2") || pathname.includes("w3");
  useQuery(["currencylist"], () =>
    fetcher("v1/rest/currencies").then((res) => res.json())
  );

  useEffect(() => {
    if (cart.length < 1) {
      setOpen(false);
    }
  }, [cart.length]);

  return (
    <>
      <Outlet />
      <ScrollRestoration />
      {isOrderPage || (
        <>
          {isNewView ? (
            <Slide
              direction="up"
              mountOnEnter
              unmountOnExit
              in={total_items > 0}
            >
              <Link to={{ pathname: "/w2/order", search }}>
                <div className={classes.wrapper}>
                  <Typography fontWeight={600}>Ordering</Typography>
                  <div className={classes.price}>
                    {formatPrice(total_amount)}
                  </div>
                </div>
              </Link>
            </Slide>
          ) : (
            <Slide
              direction="up"
              mountOnEnter
              unmountOnExit
              in={total_items > 0}
            >
              <button className={classes.link} onClick={() => setOpen(true)}>
                <Typography>View order</Typography>
                <Typography>
                  {total_items} {total_items < 2 ? "product" : "products"} (
                  {formatPrice(total_amount)})
                </Typography>
              </button>
            </Slide>
          )}
          <BottomSheet
            onDismiss={() => setOpen(false)}
            header={<Typography variant="h6">Order</Typography>}
            expandOnContentDrag
            open={open}
            footer={
              <Container maxWidth="sm">
                <Button
                  onClick={() => setOpen(false)}
                  variant="contained"
                  fullWidth
                  component={Link}
                  size="large"
                  to={{ pathname: "/order", search }}
                >
                  Go to checkout
                </Button>
              </Container>
            }
          >
            <Container maxWidth="sm">
              <Stack px={1} gap={2} my={2}>
                {cart.map((product) => (
                  <OrderCard key={product.id} product={product} />
                ))}
              </Stack>
            </Container>
          </BottomSheet>
        </>
      )}
    </>
  );
};
