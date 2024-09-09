import { styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "70vh",
}));
export const Contents = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "2rem 0",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
export const FeaturesCard = styled("div")(({ theme }) => ({
  // minHeight: "60vh",
  width: "100%",
  backgroundImage: `linear-gradient(120deg, ${[theme.palette.primary.main]}, ${[
    theme.palette.tertiary.main,
  ]})`,
  borderRadius: "35px",
  padding: "2rem 1rem ",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
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
