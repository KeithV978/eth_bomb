import { styled } from "@mui/material";
import bgImage from "../../assets/images/features/bgImage2.jpg";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("section")(({ theme }) => ({
  margin: "5rem 1rem",
  textAlign: "center",
  padding: "4rem 2rem",
  backgroundImage: `url('${bgImage}')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  //   height: "50vh",
  // boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.4)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#0000009e",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    // zIndex: -1,
  },

  [theme.breakpoints.up("sm")]: {
    backgroundSize: "100%",
    borderRadius: "50px",
    "&::before": {
      borderRadius: "25px",
    },
  },
}));
export const Title = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const ConnectButtonWrapper = styled("div")(({ theme }) => ({
  // backgroundColor: "#00000070",
  color: "#fff",
  borderRadius: "12px",
  padding: "1rem",
  marginTop: "1rem",
  //   minWidth: "3px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    borderRadius: "20px",
    maxWidth: "370px",
  },
}));
