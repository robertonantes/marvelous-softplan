import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Search from "../../containers/Search";
import { Wrapper, Flex, Logo } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <Flex>
              <Logo src={require("../../assets/images/logo.jpg")} />
              <Search />
            </Flex>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
