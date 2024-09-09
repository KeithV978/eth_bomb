import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  backgroundColor: `${[theme.palette.secondary.main]}`,
  color: "#ccc",
  padding: ".5rem 1rem",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  // position: "sticky",
  // bottom: 0,
  // width: "100%",
  // zIndex: 100,
}));
