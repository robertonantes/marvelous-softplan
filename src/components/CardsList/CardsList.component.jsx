import React from "react";
import { useHistory } from "react-router-dom";

import SuperHeroCard from "../SuperHeroCard";
import { List, Item } from "./CardsList.styles";

const CardsList = ({ items }) => {
  const history = useHistory();

  function assembleImageUrl(thumbnail) {
    return `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
  }

  return (
    <List>
      {items.map((i) => {
        const { id, name, thumbnail } = i;
        return (
          <Item onClick={() => history.push(`/character/${id}`)} key={id}>
            <SuperHeroCard name={name} image={assembleImageUrl(thumbnail)} />
          </Item>
        );
      })}
    </List>
  );
};

export default CardsList;
