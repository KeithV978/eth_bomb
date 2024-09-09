import React from "react";
import {
  Img,
  Maintext,
  // Network,
  SuperText,
  TextWrapper,
  Wrapper,
} from "./styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import MuiBtn from "@mui/material/Button";
import { Button } from "../button";
import tron_hand from "../../assets/images/hero/hero_.png";
// import Container from "@mui/material/Container";
// import {
//   // NetworkTron,
//   TokenSUN,
//   TokenUSDC,
//   TokenUSDD,
//   TokenUSDT,
// } from "@web3icons/react";
import Telegram from "@mui/icons-material/Telegram";
import { BOT_LINK } from "../../utils/links";
import { useTheme } from "@mui/material";
import logo from "../../assets/images/logo/logo.png";

export const Hero = () => {
  const theme = useTheme();
  return (
    <Wrapper id="hero">
      <Box sx={{ width: "30%", margin: "1rem auto" }}>
        <img
          src={logo}
          alt="logo"
          style={{ marginLeft: "1rem", width: "100%" }}
        />
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ color: "primary.main", fontWeight: 600 }}
        >
          ETH BOMB
        </Typography>
      </Box>
      <TextWrapper>
        <SuperText>Designed to simplify</SuperText>
        <Maintext variant="h3">
          the creation and deployment <br /> of new tokens on the
          <span style={{ color: `${[theme.palette.primary.main]}` }}>
            {" "}
            Ethereum network.
          </span>
        </Maintext>
      </TextWrapper>

      <Stack
        sx={{
          gap: 2,
          marginTop: { sm: "2rem", xs: "1rem" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Link href={BOT_LINK}>
          <Button bgColor="primary.main" color="#ccc" border="none">
            Launch <Telegram color="inherit" />
          </Button>
        </Link>
        <MuiBtn
          variant="outlined"
          color="primary"
          href="https://app.eth-bomb.com"
          sx={{
            borderRadius: "20px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            textTransform: "capitalize",
          }}
        >
          Dashboard
        </MuiBtn>
      </Stack>

      <Box
        sx={{
          marginTop: "2rem",
          position: "relative",
          overflow: "hidden",
          // border: "1px solid red",
          "&::after": {
            content: "''",
            position: "absolute",
            left: "50%",
            right: "50%",
            transform: "translate(-50%, -50%)",
            bottom: "-15vh",
            width: "25%",
            height: "20vh",
            backgroundColor: "primary.main",
            filter: "blur(70px)",
            borderRadius: "50%",
            zIndex: -1,
          },
        }}
      >
        <Img src={tron_hand} alt="screenshot" />
      </Box>

      <Box
        sx={{
          padding: { sm: "5rem 2rem 2rem", xs: "3rem 0" },
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="body2"
          textTransform="uppercase"
          color="#767676"
          letterSpacing="4px"
        >
          Deploy new tokens at reduced gas fees
        </Typography>
        {/* <Network>
          <li>
            <TokenUSDT /> USDT
          </li>
          <li>
            <TokenUSDD /> USDD
          </li>
          <li>
            <NetworkTron />
          </li> 
          <li>
            <TokenSUN />
            SUN
          </li>
          <li>
            <TokenUSDC /> USDC
          </li>
        </Network> */}
      </Box>
    </Wrapper>
  );
};
