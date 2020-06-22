import React from "react";
import { useHistory } from "react-router-dom";

import Loading from "../Loading";
import { Wrapper, EmptyText } from "./SearchResult.styles";
import ResultItem from "../ResultItem";
import { assembleImageUrl } from "../../common/helpers";

const SearchResults = ({ loading, results, onResultClick }) => {
  const history = useHistory();

  function renderResults() {
    const isEmpty = results.length === 0;

    if (isEmpty) {
      return <EmptyText>No results found</EmptyText>;
    }

    return results.map((r) => {
      const { thumbnail, name, id } = r;
      return (
        <ResultItem
          name={name}
          image={assembleImageUrl(thumbnail, "standard_large")}
          onClick={() => {
            onResultClick();
            history.push(`/character/${id}`);
          }}
        />
      );
    });
  }

  return <Wrapper>{loading ? <Loading /> : renderResults()}</Wrapper>;
};

export default SearchResults;
