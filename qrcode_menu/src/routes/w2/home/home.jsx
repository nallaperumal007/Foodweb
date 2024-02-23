import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { W2HomeCard } from "../../../components/home-card";
import classes from "./home.module.css";
import { W2Button } from "../../../components/w2-button";

const links = [
  {
    title: "Menu",
    path: "/menu",
    image: "/food2.png",
  },
  {
    title: "Feedback",
    path: "/feedback",
    image: "/feedback2.png",
  },
  {
    title: "Payment",
    path: "/payment",
    image: "/payment2.png",
  },
];

const W2Home = () => {
  return (
    <>
      <Container maxWidth="sm">
        <div className={classes.container}>
          <Stack width="100%" spacing={2}>
            {links.map((link) => (
              <W2HomeCard type="w2" key={link.title} {...link} />
            ))}
          </Stack>
        </div>
      </Container>
      <div className={classes.buttonContainer}>
        <W2Button>Call the waiter</W2Button>
      </div>
    </>
  );
};

export default W2Home;
