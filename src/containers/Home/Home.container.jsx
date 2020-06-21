import React, { useEffect, useState } from "react";
import CardsList from "../../components/CardsList";

const Home = () => {
  const [items, setItems] = useState([]);

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
    }
  }

  return <CardsList items={items} />;
};

export default Home;
