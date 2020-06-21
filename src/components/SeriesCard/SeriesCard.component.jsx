import React from "react";

import { Wrapper, Image, Title } from "./SeriesCard.styles";

const SeriesCard = ({ image, title }) => {
  return (
    <Wrapper>
      <Image data-testid="series-image" src={image} />
      <Title title={title}>{title}</Title>
    </Wrapper>
  );
};

export default SeriesCard;
