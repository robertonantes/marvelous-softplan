import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LoadingSkeleton from "../../../components/LoadingSkeleton";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterSkeleton = () => {
  return (
    <Container data-testid="character-skeleton">
      <Row>
        <Col className="mt-5">
          <Wrapper>
            <LeftContent>
              <LoadingSkeleton width="400px" height="55px" />
              <LoadingSkeleton width="200px" height="21px" margin="16px 0" />
              <LoadingSkeleton
                width="150px"
                height="18px"
                margin="40px 0 16px 0"
              />
              <LoadingSkeleton
                width="150px"
                height="18px"
                margin="0 0 16px 0"
              />
              <LoadingSkeleton
                width="150px"
                height="18px"
                margin="0 0 16px 0"
              />
              <LoadingSkeleton width="150px" height="18px" />
            </LeftContent>
            <LoadingSkeleton width="420px" height="420px" radius="50%" />
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterSkeleton;
