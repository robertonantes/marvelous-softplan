import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LoadingSkeleton from "../../../components/LoadingSkeleton";

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
  height: 300px;
  flex-shrink: 0;
  margin-bottom: 8px;
  margin-right: 8px;
`;

const HomeSkeleton = () => {
  return (
    <Container data-testid="character-skeleton">
      <Row>
        <Col className="mt-5">
          <LoadingSkeleton
            width="400px"
            height="55px"
            radius="4px"
            margin="0 0 24px 0"
          />
          <List>
            <Item>
              <LoadingSkeleton width="100%" height="100%" radius="4px" />
            </Item>
            <Item>
              <LoadingSkeleton width="100%" height="100%" radius="4px" />
            </Item>
            <Item>
              <LoadingSkeleton width="100%" height="100%" radius="4px" />
            </Item>
            <Item>
              <LoadingSkeleton width="100%" height="100%" radius="4px" />
            </Item>
            <Item>
              <LoadingSkeleton width="100%" height="100%" radius="4px" />
            </Item>
            <Item>
              <LoadingSkeleton width="100%" height="100%" radius="4px" />
            </Item>
            <Item>
              <LoadingSkeleton width="100%" height="100%" radius="4px" />
            </Item>
            <Item>
              <LoadingSkeleton width="100%" height="100%" radius="4px" />
            </Item>
            <Item>
              <LoadingSkeleton width="100%" height="100%" radius="4px" />
            </Item>
            <Item>
              <LoadingSkeleton width="100%" height="100%" radius="4px" />
            </Item>
          </List>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeSkeleton;
