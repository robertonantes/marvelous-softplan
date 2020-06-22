import {
  CHARACTERS_LOADED,
  FETCH_CHARACTERS,
  EDITING_COMPLETE,
} from "../actions/types";

const initial = {
  list: [],
  custom: {},
  isFetching: true,
};

export default function charactersReducer(state = initial, action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, isFetching: true };
    case CHARACTERS_LOADED:
      return { ...state, isFetching: false, list: action.payload };
    case EDITING_COMPLETE:
      const { payload } = action;
      return { ...state, custom: { ...state.custom, [payload.id]: payload } };
    default:
      return state;
  }
}
