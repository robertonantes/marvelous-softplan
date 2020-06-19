import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  list-style: none;
  width: calc(20% - 8px);
  flex-shrink: 0;
  margin-bottom: 8px;
`;
