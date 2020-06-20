import React, { useEffect, useState } from "react";
import { debounce } from "throttle-debounce";

import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import { Container } from "./Search.styles";

const debouncedFetch = debounce(500, fetchTerm);
function fetchTerm(f) {
  console.log(f);
}
const Search = () => {
  const [term, setTerm] = useState("");
  const [searching, setSearching] = useState(false);

  function shouldSearch() {
    return term.trim().length >= 3;
  }

  useEffect(() => {
    if (shouldSearch()) {
      debouncedFetch(term);
    }
  }, [term]);

  function onTermChange(e) {
    const { target } = e;
    setTerm(target.value);
  }

  function renderSearchResults() {
    const display = term.trim().length >= 3;

    if (!display) {
      return null;
    }

    return <SearchResults loading={searching} />;
  }

  return (
    <Container>
      <SearchForm onChange={onTermChange} />
      {renderSearchResults()}
    </Container>
  );
};

export default Search;
