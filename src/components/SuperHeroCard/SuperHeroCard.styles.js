import styled from "styled-components";

export const Wrapper = styled.div`
  height: 300px;
  max-width: 230px;
  background-image: url(${({ background }) => background});
  background-size: cover;
`;

export const Name = styled.h3``;
