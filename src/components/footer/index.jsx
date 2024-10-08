import React from "react";
import { Wrapper } from "./styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Telegram from "@mui/icons-material/Telegram";
import X from "@mui/icons-material/X";
import { NetworkEthereum } from "@web3icons/react";
import Instagram from "@mui/icons-material/Instagram";
import logo from "../../assets/images/logo/logo.png";

export const Footer = () => {
  return (
    <Wrapper>
      <Stack direction="row" gap={2}>
        <IconButton sx={{ backgroundColor: "#00000070" }}>
          <Telegram sx={{ color: "#ccc" }} />
        </IconButton>
        <IconButton sx={{ backgroundColor: "#00000070" }}>
          <X sx={{ color: "#ccc" }} />
        </IconButton>
        <IconButton sx={{ backgroundColor: "#00000070" }}>
          <Instagram sx={{ color: "#ccc" }} />
        </IconButton>
      </Stack>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <img src={logo} alt="EthBomb" width={20} />
        <Typography
          variant="body2"
          color="#ccc"
          fontWeight={700}
          component="a"
          // href="https://moonbot.com"
        >
          EthBomb
        </Typography>
      </div>
      <Box sx={{ borderTop: { sm: "none", xs: "1px solid #1c1c1c" } }}>
        <Typography variant="body1" color="#ccc" padding="1rem 0">
          Powered By <NetworkEthereum /> Ethereum
        </Typography>
      </Box>
      {/* <a href="https://www.freepik.com/free-vector/gradient-abstract-background_7448652.htm#from_view=detail_alsolike">
        Image by freepik
      </a> */}
    </Wrapper>
  );
};
