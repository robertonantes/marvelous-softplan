import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardsList from "../../components/CardsList";
import HomeSkeleton from "./fragments/HomeSkeleton.fragment";
import { Title } from "./Home.styles";

const Home = () => {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    try {
      const response = await fetch(
        "https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=20&apikey=a2ac89dc440fae737de7ea65bf7b3f11"
      );
      const json = await response.json();
      const { data } = json;
      setItems(data.results);
    } catch (e) {
      console.log(e);
    } finally {
      setReady(true);
    }
  }

  if (!ready) {
    return <HomeSkeleton />;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Title>Last updated Characters</Title>
          <CardsList items={items} />;
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
