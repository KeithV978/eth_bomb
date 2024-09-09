import React from "react";
import { Item, ItemBody, ItemHeader, Wrapper } from "./styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export const HowItWorks = () => {
  return (
    <Wrapper>
      <div>
        {" "}
        <Typography variant="h4">How It Works</Typography>
        <Box sx={{ width: { xs: "100%", sm: "fit-content" } }}>
          {/* first */}
          <Item
            sx={{
              borderLeft: "3px solid #fff",
              borderLeftColor: "primary.main",
            }}
          >
            <ItemHeader variant="h5">Deploy:</ItemHeader>{" "}
            <ItemBody variant="h6">
              Through the Telegram bot, users can deploy new tokens at lower gas
              fees.
            </ItemBody>
          </Item>
          <Divider sx={{ borderColor: "#313131" }} />

          {/* second */}
          <Item
            sx={{
              borderLeft: "3px solid #fff",
              borderLeftColor: "#2196f3",
            }}
          >
            <ItemHeader variant="h5">Tax & Bomb:</ItemHeader>{" "}
            <ItemBody variant="h6">
              Each EthBomb transaction incurs a 4% tax, which is collected in
              the Bomb.
            </ItemBody>
          </Item>
          <Divider sx={{ borderColor: "#313131" }} />

          {/* third */}
          <Item
            sx={{
              borderLeft: "3px solid #fff",
              borderLeftColor: "secondary.main",
            }}
          >
            <ItemHeader variant="h5">Vote:</ItemHeader>{" "}
            <ItemBody variant="h6">
              When the Bomb is filled to a certain level, the community votes on
              which new token to support.
            </ItemBody>
          </Item>
          <Divider sx={{ borderColor: "#313131" }} />

          {/* fourth */}
          <Item
            sx={{
              borderLeft: "3px solid #fff",
              borderLeftColor: "tertiary.main",
            }}
          >
            <ItemHeader variant="h5">Purchase:</ItemHeader>{" "}
            <ItemBody variant="h6">
              The Bomb funds are used to purchase the winning project’s tokens,
              driving growth and providing liquidity.
            </ItemBody>
          </Item>
          <Divider sx={{ borderColor: "#313131" }} />
        </Box>
      </div>
    </Wrapper>
  );
};
