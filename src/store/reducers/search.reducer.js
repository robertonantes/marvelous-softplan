import { SEARCH_COMPLETED, SEARCH_CHARACTERS } from "../actions/types";

const initial = {
  list: [],
  isSearching: true,
};

export default function charactersReducer(state = initial, action) {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      return { ...state, isSearching: true };
    case SEARCH_COMPLETED:
      return { ...state, isSearching: false, list: action.payload };
    default:
      return state;
  }
}
