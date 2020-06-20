import React, { useEffect, useState } from "react";
import { debounce } from "throttle-debounce";

import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import { Container, Logo } from "./Search.styles";
import * as services from "./Search.services";

const Search = () => {
  const [term, setTerm] = useState("");
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (services.isSearchAllowed(term)) {
      fetchCharacters();
    }
  }, [term]);

  function fetchCharacters() {
    setSearching(true);

    services.debouncedFetch(term, {
      onSuccess: (data) => setResults(data),
      onError: (error) => setError(error),
      onDone: () => setSearching(false),
    });
  }

  function onTermChange(e) {
    const { target } = e;
    setTerm(target.value);
  }

  function renderSearchResults() {
    if (!services.isSearchAllowed(term)) {
      return null;
    }

    return <SearchResults loading={searching} results={results} />;
  }

  return (
    <Container>
      <SearchForm onChange={onTermChange} />
      {renderSearchResults()}
    </Container>
  );
};

export default Search;
