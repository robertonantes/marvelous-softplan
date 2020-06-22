import {
  CHARACTERS_LOADED,
  FETCH_CHARACTERS,
  SEARCH_CHARACTERS,
  SEARCH_COMPLETED,
} from "./types";
import { fetchCharacters } from "../../common/services";

export function fetchLatestCharacters() {
  return async function (dispatch) {
    dispatch({ type: FETCH_CHARACTERS });
    const options = {
      orderBy: "-modified",
      limit: 20,
    };
    const response = await fetchCharacters(options);
    dispatch({ type: CHARACTERS_LOADED, payload: response.data });
  };
}

export function searchCharacters(term) {
  return async function (dispatch) {
    dispatch({ type: SEARCH_CHARACTERS });

    const options = {
      nameStartsWith: term,
      orderBy: "name",
      limit: 5,
    };

    const response = await fetchCharacters(options);
    dispatch({ type: SEARCH_COMPLETED, payload: response.data });
  };
}
