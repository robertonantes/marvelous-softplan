import React from "react";

import { Wrapper, Image, Title } from "./SeriesCard.styles";

const SeriesCard = ({ img, title }) => {
  return (
    <Wrapper>
      <Image src={img} />
      <Title title={title}>{title}</Title>
    </Wrapper>
  );
};

export default SeriesCard;
