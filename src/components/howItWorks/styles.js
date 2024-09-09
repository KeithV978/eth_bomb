import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "200px",
  padding: "3rem 2rem 2rem",
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
  justifyContent: "center",
}));
export const Item = styled("div")(({ theme }) => ({
  //   display: "flex",
  alignItems: "center",
  width: "fit-content",
  paddingLeft: "2rem",
  margin: "1rem",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "5rem",
  },
  //   borderBottom: "1px solid #ccc",
}));
export const ItemHeader = styled(Typography)(({ theme }) => ({}));
export const ItemBody = styled(Typography)(({ theme }) => ({
  //   lineBreak: "anywhere",
  wordWrap: "break-word",
}));
