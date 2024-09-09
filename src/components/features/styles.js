import { styled } from "@mui/material";
import Stack from "@mui/material/Stack";

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
  minHeight: "60vh",
  maxWidth: "300px",
  backgroundImage: `linear-gradient(120deg, ${[theme.palette.primary.main]}, ${[
    theme.palette.tertiary.main,
  ]})`,
  borderRadius: "35px",
  padding: "2rem 1rem ",
}));
