import React from "react";
import SuperHeroCard from "../SuperHeroCard";

const CardsList = ({ items }) => {
  function assembleImageUrl(thumbnail) {
    return `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
  }

  return items.map((i) => {
    const { id, name, thumbnail } = i;
    return (
      <SuperHeroCard name={name} image={assembleImageUrl(thumbnail)} key={id} />
    );
  });
};

export default CardsList;
