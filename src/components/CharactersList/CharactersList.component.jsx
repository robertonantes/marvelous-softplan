import React from "react";
import { useHistory } from "react-router-dom";

import SuperHeroCard from "../SuperHeroCard";
import { List, Item } from "./CharactersList.styles";
import { assembleImageUrl } from "../../common/utils";

const CharactersList = ({ items }) => {
  const history = useHistory();

  return (
    <List>
      {items.map((i) => {
        const { id, name, thumbnail } = i;
        return (
          <Item onClick={() => history.push(`/character/${id}`)} key={id}>
            <SuperHeroCard
              name={name}
              image={assembleImageUrl(thumbnail, "portrait_uncanny")}
            />
          </Item>
        );
      })}
    </List>
  );
};

export default CharactersList;
