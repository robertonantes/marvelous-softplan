import { FETCH_CHARACTERS } from "../actions/types";

export function cacheLatestCharacters({ getState }) {
  return function (next) {
    return function (action) {
      if (action.type === FETCH_CHARACTERS) {
        const { characters } = getState();
        if (characters.list.length > 0) {
          return;
        }
      }

      return next(action);
    };
  };
}
