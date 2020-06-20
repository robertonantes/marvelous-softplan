import React, { useEffect, useState } from "react";
import CardsList from "./components/CardsList";
import Search from "./containers/Search";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchHeroes();
  }, []);

  async function fetchHeroes() {
    try {
      const response = await fetch(
        "https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=20&apikey=a2ac89dc440fae737de7ea65bf7b3f11"
      );
      const json = await response.json();
      const { data } = json;
      setItems(data.results);
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Search />
      <CardsList items={items} />
    </>
  );
}

export default App;
