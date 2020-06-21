import React, { useEffect, useRef, useState } from "react";

import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import { Container } from "./Search.styles";
import * as services from "./Search.services";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    function bindedListener(event) {
      if (services.clickedOutside(event, containerRef)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", bindedListener);
    return () => {
      document.removeEventListener("mousedown", bindedListener);
    };
  }, [containerRef]);

  useEffect(() => {
    if (services.isSearchAllowed(term)) {
      fetchCharacters();
    }
  }, [term]);

  function fetchCharacters() {
    setSearching(true);
    setOpen(true);

    services.debouncedFetch(term, {
      onSuccess: (data) => setResults(data),
      onDone: () => setSearching(false),
    });
  }

  function onTermChange(e) {
    const { target } = e;
    setTerm(target.value);
  }

  function onSearchFocus(e) {
    const { target } = e;
    if (services.isSearchAllowed(target.value)) {
      setOpen(true);
    }
  }

  function onResultClick() {
    setOpen(false);
  }

  function renderSearchResults() {
    if (!services.isSearchAllowed(term) || !open) {
      return null;
    }

    return (
      <SearchResults
        loading={searching}
        results={results}
        onResultClick={onResultClick}
      />
    );
  }

  return (
    <Container ref={containerRef}>
      <SearchForm onChange={onTermChange} onFocus={onSearchFocus} />
      {renderSearchResults()}
    </Container>
  );
};

export default Search;
