import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { HomeCard } from "../../components/home-card";
import classes from "./home.module.css";

const links = [
  {
    title: "Menu",
    path: "/menu",
    image: "/food.jpeg"
  },
  {
    title: "Feedback",
    path: "/feedback",
    image: '/food1.jpeg'
  },
  {
    title: "Call the waiter",
    onClick: () => { },
    image: "/salad.jpeg"
  },
  {
    title: "Payment",
    path: "/payment",
    image: "/drinks.jpeg"
  },
];

const Home = () => {
  return (
    <Container maxWidth="sm">
      <div className={classes.container}>
        <Grid container spacing={{0: 0.5, xs: 1, md: 2}}>
          {links.map((link) => (
            <Grid key={link.title} item xs={6}>
              <HomeCard {...link} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
