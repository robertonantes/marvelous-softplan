import React from "react";
import {
  Wrapper,
  Details,
  Name,
  Description,
  ImageContainer,
  Image,
  AppearsOn,
} from "./CharacterDetails.styles.js";

const CharacterDetails = ({ data }) => {
  const { name, description, comics, series, stories, events } = data;
  return (
    <Wrapper>
      <Details>
        <Name>{name}</Name>
        <Description>{description || "No description available"}</Description>
        <AppearsOn>
          <p>
            Comics: <span>{comics.available}</span>
          </p>
          <p>
            Events: <span>{events.available}</span>
          </p>
          <p>
            Series: <span>{series.available}</span>
          </p>
          <p>
            Stories: <span>{stories.available}</span>
          </p>
        </AppearsOn>
      </Details>
      <ImageContainer>
        <Image src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
      </ImageContainer>
    </Wrapper>
  );
};
export default CharacterDetails;
