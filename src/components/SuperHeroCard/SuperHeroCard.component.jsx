import React from "react";
import { Name, Wrapper } from "./SuperHeroCard.styles";

const SuperHeroCard = ({ name, image }) => {
  return (
    <Wrapper background={image}>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default SuperHeroCard;
