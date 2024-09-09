import { styled } from "@mui/material";
import airdrop from "../../assets/images/advantages/coin_fall.png";
import trend from "../../assets/images/advantages/trend.png";
import hands from "../../assets/images/advantages/hands.png";
import rewards from "../../assets/images/advantages/rewards1.png";

export const Wrapper = styled("section")(({ theme }) => ({
  minHeight: "50vh",
}));

export const TextWrapper = styled("div")(({ theme }) => ({
  width: "fit-content",
  margin: "0 auto",
  // background: `linear-gradient(45deg, ${[theme.palette.secondary.main]}, #fff)`,
  // webkitBackgroundClip: "text",
  // webkitTextFillColor: "transparent",
  // backgroundClip: "text",
  // textFillColor: "transparent",
  // marginBottom: "1rem",
}));
export const Holder = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    minHeight: "60vh",
  },
}));
export const HolderTexts = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {},
}));
export const AirdropImage = styled("div")(({ theme }) => ({
  marginRight: "2rem",
  backgroundImage: `url('${airdrop}')`,
  backgroundSize: "contain",
  width: "100%",
  height: "50vh",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    flexDirection: "row",
  },
}));
export const TrendImage = styled("div")(({ theme }) => ({
  marginLeft: "2rem",
  backgroundImage: `url('${trend}')`,
  backgroundSize: "contain",
  width: "100%",
  height: "50vh",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    flexDirection: "row",
  },
}));
export const HandsImage = styled("div")(({ theme }) => ({
  marginRight: "2rem",
  backgroundImage: `url('${hands}')`,
  backgroundSize: "contain",
  width: "100%",
  height: "50vh",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    flexDirection: "row",
  },
}));
export const RewardsImage = styled("div")(({ theme }) => ({
  marginRight: "2rem",
  backgroundImage: `url('${rewards}')`,
  backgroundSize: "contain",
  width: "100%",
  height: "50vh",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    flexDirection: "row",
  },
}));
