import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 300px;
  max-width: 240px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  box-shadow: inset 0px -40px 20px rgba(0,0,0,0.6);
  text-shadow: 1px 2px 0px #000;
}
`;

export const Name = styled.h3`
  position: absolute;
  margin: 0;
  bottom: 8px;
  color: #fff;
  left: 16px;
`;
