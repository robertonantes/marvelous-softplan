import React from "react";
import { Wrapper, Image, Name } from "./ResultItem.styles";

const ResultItem = ({ name, image, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Image src={image} />
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default ResultItem;
