import React from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Search from "../../containers/Search";
import { Wrapper, Flex, Logo } from "./Header.styles";

const Header = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <Flex>
              <Logo
                src={require("../../assets/images/logo.jpg")}
                onClick={() => history.push("/")}
              />
              <Search />
            </Flex>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
