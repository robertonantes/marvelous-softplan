import { CHARACTERS_LOADED, FETCH_CHARACTERS } from "./types";

export function fetchLatestCharacters() {
  return async function (dispatch) {
    dispatch({ type: FETCH_CHARACTERS });

    try {
      const response = await fetch(
        "https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=20&apikey=a2ac89dc440fae737de7ea65bf7b3f11"
      );
      const json = await response.json();
      const { data } = json;

      dispatch({ type: CHARACTERS_LOADED, payload: data.results });
    } catch (e) {
      console.log(e);
    }
  };
}
