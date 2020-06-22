import React from "react";
import { Name, Wrapper } from "./SuperHeroCard.styles";

const SuperHeroCard = ({ name, image }) => {
  return (
    <Wrapper background={image} data-testid="hero-image">
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default SuperHeroCard;
