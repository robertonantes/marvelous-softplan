import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color 200ms;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    background-color: #292929;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border: 2px solid #fff;
`;

export const Name = styled.h4`
  color: #fff;
  margin: 0;
  margin-left: 16px;
`;
