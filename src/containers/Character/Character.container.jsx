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
import SeriesList from "../../components/SeriesList";
import CharacterSkeleton from "./fragments/CharacterSkeleton.fragment";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [series, setSeries] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);

    async function fetchData() {
      const response = await fetchCharacterDetails(id, {});
      setData(response.data[0]);
    }

    async function fetchSeries() {
      const response = await fetchCharacterSeries(id, {
        limit: 24,
        orderBy: "-modified",
      });
      setSeries(response.data);
      setReady(true);
    }

    fetchData();
    fetchSeries();
  }, [id]);

  if (!ready) {
    return <CharacterSkeleton />;
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
          <SeriesList data={series} />
        </Col>
      </Row>
    </Container>
  );
};

export default Character;
