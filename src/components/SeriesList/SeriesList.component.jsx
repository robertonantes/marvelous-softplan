import React from "react";

import { Title, List, ListItem } from "./SeriesList.styles";
import SeriesCard from "../SeriesCard";

const SeriesList = ({ data = [] }) => {
  return (
    <>
      <Title>Last updated series</Title>
      <List data-testid="series-list">
        {data.map((s) => (
          <ListItem key={s.id}>
            <SeriesCard
              title={s.title}
              image={`${s.thumbnail.path}/portrait_medium.${s.thumbnail.extension}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SeriesList;
