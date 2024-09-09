import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "70vh",
  padding: "3rem 2rem 2rem",
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
  justifyContent: "center",
}));
export const Item = styled("div")(({ theme }) => ({
  //   display: "flex",
  alignItems: "center",
  width: "max-content",
  paddingLeft: "5rem",
  margin: "1rem",
  //   borderBottom: "1px solid #ccc",
}));
export const ItemHeader = styled(Typography)(({ theme }) => ({}));
export const ItemBody = styled(Typography)(({ theme }) => ({}));
