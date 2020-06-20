import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 80px;
  border: 2px solid #fff;
`;

export const Name = styled.h4`
  color: #fff;
  margin: 0;
  margin-left: 16px;
`;
