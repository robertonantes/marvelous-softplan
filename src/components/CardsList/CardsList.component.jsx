import React from "react";
import SuperHeroCard from "../SuperHeroCard";
import { List, Item } from "./CardsList.styles";

const CardsList = ({ items }) => {
  function assembleImageUrl(thumbnail) {
    return `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
  }

  return (
    <List>
      {items.map((i) => {
        const { id, name, thumbnail } = i;
        return (
          <Item>
            <SuperHeroCard
              name={name}
              image={assembleImageUrl(thumbnail)}
              key={id}
            />
          </Item>
        );
      })}
    </List>
  );
};

export default CardsList;
