import React from "react";
import { ConnectButtonWrapper, Title, Wrapper } from "./styles";
import { Button } from "../button";
// import { WalletWalletConnect } from "@web3icons/react";
// import LinkRounded from "@mui/icons-material/RocketLaunchRounded";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { BOT_LINK } from "../../utils/links";
import { JoinFullRounded } from "@mui/icons-material";

export const ConnectWallet = () => {
  return (
    // <div>
    <Wrapper>
      <Typography variant="h4" sx={{ zIndex: 1 }}>
        Join EthBomb
      </Typography>
      <Title variant="h6" sx={{ zIndex: 1 }}>
        Join EthBomb today and be a part of a revolutionary ecosystem where you
        can deploy your own tokens, influence new project success, and benefit
        from a thriving community!
      </Title>
      <ConnectButtonWrapper>
        <Link href={BOT_LINK} sx={{ textDecoration: "none" }}>
          <Button bgColor="#ccc" color="#1c1c1c" border="none">
            Join <JoinFullRounded />
          </Button>
        </Link>
      </ConnectButtonWrapper>
    </Wrapper>
    // </div>
  );
};
