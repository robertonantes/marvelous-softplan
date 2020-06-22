import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchLatestCharacters } from "../../store/actions";

import CharactersList from "../../components/CharactersList";
import HomeSkeleton from "./fragments/HomeSkeleton.fragment";
import { Title } from "./Home.styles";

const Home = () => {
  const { list, isFetching } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestCharacters());
  }, []);

  if (isFetching) {
    return <HomeSkeleton />;
  }

  return (
    <Container className="mt-5" data-testid="home-list">
      <Row>
        <Col>
          <Title>Last updated Characters</Title>
          <CharactersList items={list} />;
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
