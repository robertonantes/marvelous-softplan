import React from "react";

import { Title, List, ListItem } from "./CharacterSeries.styles";
import SeriesCard from "../SeriesCard";

const CharacterSeries = ({ data }) => {
  return (
    <>
      <Title>Series</Title>
      <List>
        {data.map((s) => (
          <ListItem>
            <SeriesCard
              title={s.title}
              img={`${s.thumbnail.path}/portrait_medium.${s.thumbnail.extension}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CharacterSeries;
