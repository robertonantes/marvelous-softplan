import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.div``;
export const Name = styled.h1`
  color: #fff;
  font-size: 48px;
  text-decoration: underline;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  color: #b9b9b9;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  max-width: 530px;
`;

export const AppearsOn = styled.div`
  margin-top: 40px;

  p {
    color: #fff;
    font-weight: 500;
    margin-bottom: 8px;
    margin-top: 0;

    span {
      font-weight: 300;
    }
  }
`;

export const ImageContainer = styled.div``;
export const Image = styled.img`
  max-width: 420px;
  border-radius: 50%;
`;
