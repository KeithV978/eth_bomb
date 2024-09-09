import { styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "550px",
}));
export const Contents = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    padding: "2rem 0",
  },
}));
export const FeaturesCard = styled("div")(({ theme }) => ({
  width: "100%",
  backgroundImage: `linear-gradient(120deg, ${[theme.palette.primary.main]}, ${[
    theme.palette.tertiary.main,
  ]})`,
  borderRadius: "35px",
  padding: "2rem 1rem ",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.3)",
  "&:hover": {
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.168)",
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: "500px",
    padding: "2rem",
    maxWidth: "300px",
  },
}));
export const SecFeaturesCard = styled(FeaturesCard)(({ theme }) => ({
  backgroundImage: `linear-gradient(120deg, ${[theme.palette.primary.main]}, ${[
    theme.palette.secondary.main,
  ]})`,
}));
export const ThirdFeaturesCard = styled(FeaturesCard)(({ theme }) => ({
  backgroundImage: `linear-gradient(120deg, ${[
    theme.palette.tertiary.main,
  ]}, #2196f3)`,
}));
export const FourthFeaturesCard = styled(FeaturesCard)(({ theme }) => ({
  backgroundImage: `linear-gradient(120deg, ${[
    theme.palette.primary.main,
  ]}, #00bcd4)`,
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  // backgroundColor: "#1c1c1c",
  border: "1px solid #fff",
  color: "#fff",
  borderRadius: "25px",
  margin: "1rem auto",
}));
