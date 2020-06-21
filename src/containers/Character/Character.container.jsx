import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  fetchCharacterDetails,
  fetchCharacterSeries,
} from "../../common/services";
import CharacterDetails from "../../components/CharacterDetails";
import CharacterSeries from "../../components/CharacterSeries";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [series, setSeries] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchData();
    fetchSeries();
  }, []);

  async function fetchData() {
    const response = await fetchCharacterDetails(id, {});
    setData(response.data[0]);
  }

  async function fetchSeries() {
    const response = await fetchCharacterSeries(id, { limit: 24 });
    setSeries(response.data);
    setReady(true);
  }

  if (!ready) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <CharacterDetails data={data} />
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <CharacterSeries data={series} />
        </Col>
      </Row>
    </Container>
  );
};

export default Character;
