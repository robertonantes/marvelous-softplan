import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { fetchCharacterDetails } from "../../common/services";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetchCharacterDetails(id, {});
    console.log(response);
  }

  if (!ready) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Character;
