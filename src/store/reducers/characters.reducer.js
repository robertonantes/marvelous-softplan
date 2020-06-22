import { CHARACTERS_LOADED, FETCH_CHARACTERS } from "../actions/types";

const initial = {
  list: [],
  isFetching: true,
};

export default function charactersReducer(state = initial, action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, isFetching: true };
    case CHARACTERS_LOADED:
      return { ...state, isFetching: false, list: action.payload };
    default:
      return state;
  }
}
