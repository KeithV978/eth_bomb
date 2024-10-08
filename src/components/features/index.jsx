import React from "react";
import {
  Contents,
  FeaturesCard,
  FourthFeaturesCard,
  SecFeaturesCard,
  StyledButton,
  ThirdFeaturesCard,
  Wrapper,
} from "./styles";
// import { Button } from "../button";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import Check from "@mui/icons-material/AdjustRounded";

export const Features = () => {
  return (
    <Wrapper>
      <Typography variant="h6" textAlign="center">
        Key Features
      </Typography>
      <Contents>
        {/* First feature */}
        <FeaturesCard>
          <div>
            <Typography
              variant="h6"
              textAlign="center"
              fontWeight={700}
              marginBottom={2}
            >
              Community Voting & Project Support
            </Typography>
            {[
              "Once the Bomb reaches a certain threshold, the community will be able to vote on which newly deployed token (from our bot) deserves support.",
              `The project with the most votes will receive a major boost, as the funds in the Bomb will be used to purchase its tokens.`,
              "This creates a continuous cycle where promising projects are supported, and the community has a say in which projects succeed.",
            ].map((item, index) => {
              return (
                <ListItem disableGutters sx={{ alignItems: "start" }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <Check sx={{ color: "#1c1c1c" }} />
                  </ListItemIcon>
                  <Typography variant="body2" key={index}>
                    {item}
                  </Typography>
                </ListItem>
              );
            })}
          </div>

          <StyledButton variant="outlined">Learn More</StyledButton>
        </FeaturesCard>

        {/* Second feature */}
        <SecFeaturesCard>
          <div>
            <Typography
              variant="h6"
              textAlign="center"
              fontWeight={700}
              marginBottom={2}
            >
              Benefits for Token Holders
            </Typography>
            {[
              "As a holder of EthBomb, you not only participate in a cutting-edge DeFi system but also have the chance to influence the success of new and innovative projects on the Ethereum network.",
              "Your EthBomb tokens provide governance power, allowing you to vote in important decisions and project selections.",
            ].map((item, index) => {
              return (
                <ListItem disableGutters sx={{ alignItems: "start" }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <Check sx={{ color: "#1c1c1c" }} />
                  </ListItemIcon>
                  <Typography variant="body2" key={index}>
                    {item}
                  </Typography>
                </ListItem>
              );
            })}
          </div>

          <StyledButton variant="outlined">Learn More</StyledButton>
        </SecFeaturesCard>
        {/* Third feature */}
        <ThirdFeaturesCard>
          <div>
            <Typography
              variant="h6"
              textAlign="center"
              fontWeight={700}
              marginBottom={2}
            >
              EthBomb Token Tax Mechanism
            </Typography>
            {[
              "The EthBomb token will have a 4% tax on every transaction.",
              `The funds generated from this tax will be collected into what we call the "Bomb."`,
              "The Bomb represents a fund that grows with each transaction, providing the fuel for community-driven investments.",
            ].map((item, index) => {
              return (
                <ListItem disableGutters sx={{ alignItems: "start" }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <Check sx={{ color: "#1c1c1c" }} />
                  </ListItemIcon>
                  <Typography variant="body2" key={index}>
                    {item}
                  </Typography>
                </ListItem>
              );
            })}
          </div>
          <StyledButton variant="outlined">Learn More</StyledButton>
        </ThirdFeaturesCard>

        {/* Fourth feature */}
        <FourthFeaturesCard>
          <div>
            <Typography
              variant="h6"
              textAlign="center"
              fontWeight={700}
              marginBottom={2}
            >
              Telegram Bot for Token Deployment
            </Typography>
            {[
              "Users can deploy their own tokens through our Telegram bot.",
              "The bot offers significantly reduced gas fees, making it easier and more affordable for developers and creators to launch their tokens on the Ethereum network.",
            ].map((item, index) => {
              return (
                <ListItem disableGutters sx={{ alignItems: "start" }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <Check sx={{ color: "#1c1c1c" }} />
                  </ListItemIcon>
                  <Typography variant="body2" key={index}>
                    {item}
                  </Typography>
                </ListItem>
              );
            })}
          </div>

          <StyledButton variant="outlined">Learn More</StyledButton>
        </FourthFeaturesCard>
      </Contents>
    </Wrapper>
  );
};
