import { START_EDITING, EDITING_COMPLETE } from "../actions/types";

const initial = {
  isEditing: false,
};

export default function editReducer(state = initial, action) {
  switch (action.type) {
    case START_EDITING:
      return { ...state, isEditing: true };
    case EDITING_COMPLETE:
      return { ...state, isEditing: false };
    default:
      return state;
  }
}
