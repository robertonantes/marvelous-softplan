import React from "react";
import { Wrapper, Image, Name } from "./ResultItem.styles";

const ResultItem = ({ name, image }) => {
  return (
    <Wrapper>
      <Image src={image} />
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default ResultItem;
