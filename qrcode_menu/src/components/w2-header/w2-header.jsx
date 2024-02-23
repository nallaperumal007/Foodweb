import ChevronLeft from "../../assets/icons/chevron-left";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import classes from "./w2-header.module.css";
import PhoneOutlined from "../../assets/icons/phone-outlined";
import Magnifier from "../../assets/icons/magnifier";
import { useNavigate } from "react-router-dom";
export const W2Header = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="sm" className={classes.container}>
        <button onClick={() => navigate(-1)} className={classes.button}>
          <ChevronLeft />
          Back
        </button>
        <div className={classes.actions}>
          <IconButton>
            <PhoneOutlined />
          </IconButton>
          <IconButton>
            <Magnifier />
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default W2Header;
