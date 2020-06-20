import React from "react";

import Loading from "../Loading";
import { Wrapper } from "./SearchResult.styles";
import ResultItem from "../ResultItem";

const SearchResults = ({ loading, results }) => {
  function assembleImageUrl(thumbnail) {
    return `${thumbnail.path}/standard_large.${thumbnail.extension}`;
  }

  function renderResults() {
    return results.map((r) => {
      return <ResultItem name={r.name} image={assembleImageUrl(r.thumbnail)} />;
    });
  }

  return <Wrapper>{loading ? <Loading /> : renderResults()}</Wrapper>;
};

export default SearchResults;
