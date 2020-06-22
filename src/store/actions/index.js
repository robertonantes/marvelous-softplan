import {
  CHARACTERS_LOADED,
  FETCH_CHARACTERS,
  SEARCH_CHARACTERS,
  SEARCH_COMPLETED,
  START_EDITING,
  EDITING_COMPLETE,
} from "./types";

import { fetchCharacters } from "../../common/services";
import {
  getCustomCharacters,
  mergeCustomCharacters,
} from "../../common/helpers";

export function fetchLatestCharacters() {
  return async function (dispatch) {
    dispatch({ type: FETCH_CHARACTERS });
    const options = {
      orderBy: "-modified",
      limit: 20,
    };
    const response = await fetchCharacters(options);
    dispatch({
      type: CHARACTERS_LOADED,
      payload: mergeCustomCharacters(response.data),
    });
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

export function startEditing() {
  return { type: START_EDITING };
}

export function editingComplete(payload) {
  const custom = getCustomCharacters();
  const { id } = payload;
  custom[id] = { ...payload };
  sessionStorage.setItem("customCharacters", JSON.stringify(custom));

  return { type: EDITING_COMPLETE, payload };
}
