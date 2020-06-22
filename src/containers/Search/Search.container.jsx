import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "throttle-debounce";

import { searchCharacters } from "../../store/actions";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import { Container } from "./Search.styles";
import * as services from "./Search.services";

const debounced = debounce(500, true, (term, dispatch) => {
  dispatch(searchCharacters(term));
});

const Search = () => {
  const dispatch = useDispatch();
  const { list, isSearching } = useSelector((state) => state.search);
  const containerRef = useRef(null);

  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);

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
      debounced(term, dispatch);
      setOpen(true);
    }
  }, [term]);

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
        loading={isSearching}
        results={list}
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
