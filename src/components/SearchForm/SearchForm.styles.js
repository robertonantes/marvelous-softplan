import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.input`
  width: 400px;
  height: 40px;
  background-color: #232323;
  border: 0;
  font-weight: 300;
  outline: 0;
  color: #fff;
  padding-left: 16px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Button = styled.button`
  height: 40px;
  width: 64px;
  background-color: #232323;
  border: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  outline: 0;

  img {
    width: 24px;
  }
`;
