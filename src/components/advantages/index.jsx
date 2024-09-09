import React from "react";
import {
  AirdropImage,
  HandsImage,
  Holder,
  HolderTexts,
  RewardsImage,
  TextWrapper,
  TrendImage,
  Wrapper,
} from "./styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ListItem, ListItemIcon, useTheme } from "@mui/material";
import Check from "@mui/icons-material/ArrowRightRounded";

export const Advantages = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <TextWrapper>
        <Typography variant="h4" marginBottom={4}>
          EthBomb Token Creation Advantages for Users
        </Typography>
      </TextWrapper>

      <Box>
        {/* first */}
        <Holder>
          <AirdropImage />

          <HolderTexts>
            <Typography variant="h5">
              Direct Buyback Support and Airdrops from EthBomb
            </Typography>

            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>How it Works:</strong> EthBomb collects a 4% tax from
                each transaction made with the EthBomb token. These funds are
                stored in what we call "The Bomb." Once a threshold is reached,
                the community votes on a project, and the Bomb’s funds are used
                to buy that project’s tokens.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>Your Advantage:</strong> If your token is selected,
                EthBomb will buy back your token, providing immediate liquidity
                and financial support.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>Airdrops:</strong> We will also airdrop the purchased
                tokens to EthBomb holders, increasing awareness and driving
                demand for your token. This creates a continuous cycle of value
                that encourages more users to purchase and hold EthBomb.
              </Typography>
            </ListItem>
          </HolderTexts>
        </Holder>

        {/* second */}
        <Holder>
          <div>
            <Typography variant="h5">
              Easily Trending Across Platforms
            </Typography>

            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>How it Works:</strong> EthBomb’s community engagement
                and unique mechanisms allow new projects to get immediate
                attention.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>Your Advantage:</strong> With EthBomb’s growing
                ecosystem, your token has the potential to quickly trend across
                platforms and exchanges, thanks to both our active community and
                the buyback and airdrop strategy. Being part of EthBomb gives
                your project higher visibility from day one.
              </Typography>
            </ListItem>
          </div>

          {/* Image will go here */}
          <TrendImage />
        </Holder>

        <Holder>
          {/* Image goes here */}
          <div>
            <Typography variant="h5">Sustainable Utility Program</Typography>

            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>How it Works:</strong> EthBomb’s financial structure
                ensures continuous support for new projects.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>Your Advantage:</strong> When you launch a token with
                EthBomb, you are not just creating a token—you’re entering a
                sustainable ecosystem where the Bomb grows over time, creating
                opportunities for ongoing support. This makes EthBomb projects
                attractive not only to creators but also to investors looking
                for long-term sustainability.
              </Typography>
            </ListItem>
          </div>
        </Holder>
        <Holder>
          <HandsImage />
          <div>
            <Typography variant="h5">
              Community Backing and Voting Power
            </Typography>

            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>How it Works:</strong> Every time the Bomb is full,
                EthBomb’s community votes on which project deserves support.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>Your Advantage:</strong> By deploying a token through
                EthBomb, you instantly tap into a community that is eager to
                support innovative projects. If your project resonates with the
                community, they can vote to support it, giving you a strong base
                of engaged token holders from the very start.
              </Typography>
            </ListItem>
          </div>
        </Holder>
        <Holder>
          <div>
            <Typography variant="h5">
              Opportunity for Financial Support (Bomb Rewards)
            </Typography>

            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>How it Works:</strong> The Bomb’s funds accumulate from
                EthBomb transaction taxes and are used to purchase tokens from
                the most-voted project.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>Your Advantage:</strong> If your token wins the
                community vote, the Bomb will be used to buy back your token,
                offering a significant financial boost. This can act as both a
                liquidity driver and a marketing event, giving your project
                immediate attention and resources.
              </Typography>
            </ListItem>
          </div>
          <RewardsImage />
        </Holder>

        <Holder>
          <div>
            <Typography variant="h5">
              Low Gas Fees for Token Creation
            </Typography>

            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>How it Works:</strong> Our Telegram bot allows you to
                deploy new tokens on the Ethereum network at a reduced gas cost,
                which is typically one of the highest barriers for token
                creators.
              </Typography>
            </ListItem>
            <ListItem sx={{ alignItems: "start" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Check sx={{ color: `${[theme.palette.tertiary.main]}` }} />
              </ListItemIcon>
              <Typography variant="h6">
                <strong>Your Advantage:</strong> By lowering the cost of token
                creation, EthBomb makes it easier for you to launch your project
                without worrying about high Ethereum gas fees. You can focus on
                your project, knowing that you have more resources available
                from the start.
              </Typography>
            </ListItem>
          </div>
        </Holder>
      </Box>
    </Wrapper>
  );
};
