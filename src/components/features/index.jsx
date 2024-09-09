import React from "react";
import { Contents, FeaturesCard, Wrapper } from "./styles";
// import { Button } from "../button";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import Check from "@mui/icons-material/DoneAllRounded";

export const Features = () => {
  return (
    <Wrapper>
      <Typography variant="h6">Key Features</Typography>
      <Contents>
        {/* First feature */}
        <FeaturesCard>
          <Typography variant="body1" fontWeight={700}>
            Telegram Bot for Token Deployment
          </Typography>
          {[
            "Users can deploy their own tokens through our Telegram bot.",
            "The bot offers significantly reduced gas fees, making it easier and more affordable for developers and creators to launch their tokens on the Ethereum network.",
          ].map((item, index) => {
            return (
              <ListItem disableGutters>
                <ListItemIcon>
                  <Check sx={{ color: "#fff" }} />
                </ListItemIcon>
                <Typography variant="body2" key={index}>
                  {item}
                </Typography>
              </ListItem>
            );
          })}
        </FeaturesCard>

        {/* Second feature */}
        <FeaturesCard>
          <Typography variant="body1" fontWeight={700}>
            EthBomb Token Tax Mechanism
          </Typography>
          {[
            "The EthBomb token will have a 4% tax on every transaction.",
            `The funds generated from this tax will be collected into what we call the "Bomb."`,
            "The Bomb represents a fund that grows with each transaction, providing the fuel for community-driven investments.",
          ].map((item, index) => {
            return (
              <ListItem disableGutters>
                <ListItemIcon>
                  <Check sx={{ color: "#fff" }} />
                </ListItemIcon>
                <Typography variant="body2" key={index}>
                  {item}
                </Typography>
              </ListItem>
            );
          })}
        </FeaturesCard>
        {/* Third feature */}
        <FeaturesCard>
          <Typography variant="body1" fontWeight={700}>
            Community Voting & Project Support
          </Typography>
          {[
            "Once the Bomb reaches a certain threshold, the community will be able to vote on which newly deployed token (from our bot) deserves support.",
            `The project with the most votes will receive a major boost, as the funds in the Bomb will be used to purchase its tokens.`,
            "This creates a continuous cycle where promising projects are supported, and the community has a say in which projects succeed.",
          ].map((item, index) => {
            return (
              <ListItem disableGutters>
                <ListItemIcon>
                  <Check sx={{ color: "#fff" }} />
                </ListItemIcon>
                <Typography variant="body2" key={index}>
                  {item}
                </Typography>
              </ListItem>
            );
          })}
        </FeaturesCard>

        {/* Fourth feature */}
        <FeaturesCard>
          <Typography variant="body1" fontWeight={700}>
            Benefits for Token Holders
          </Typography>
          {[
            "As a holder of EthBomb, you not only participate in a cutting-edge DeFi system but also have the chance to influence the success of new and innovative projects on the Ethereum network.",
            "Your EthBomb tokens provide governance power, allowing you to vote in important decisions and project selections.",
          ].map((item, index) => {
            return (
              <ListItem disableGutters>
                <ListItemIcon>
                  <Check sx={{ color: "#fff" }} />
                </ListItemIcon>
                <Typography variant="body2" key={index}>
                  {item}
                </Typography>
              </ListItem>
            );
          })}
        </FeaturesCard>
      </Contents>
    </Wrapper>
  );
};
