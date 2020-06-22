import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditCharacterForm from "../EditCharacterForm";
import { startEditing } from "../../store/actions";
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

  const { isEditing } = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  function onNameDoubleClick() {
    dispatch(startEditing());
  }

  return (
    <Wrapper data-testid="character-details">
      <Details>
        {isEditing ? <EditCharacterForm data={data} /> : null}
        <Name onDoubleClick={onNameDoubleClick} isEditing={isEditing}>
          {name}
        </Name>
        <Description>{description || "No description available"}</Description>
        <AppearsOn>
          <p data-testid="comics">
            Comics: <span>{comics?.available}</span>
          </p>
          <p data-testid="events">
            Events: <span>{events?.available}</span>
          </p>
          <p data-testid="series">
            Series: <span>{series?.available}</span>
          </p>
          <p data-testid="stories">
            Stories: <span>{stories?.available}</span>
          </p>
        </AppearsOn>
      </Details>
      <ImageContainer>
        <Image
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          width="420px"
          height="420px"
          data-testid="character-image"
        />
      </ImageContainer>
    </Wrapper>
  );
};
export default CharacterDetails;
