import { combineReducers } from "redux";
import characters from "./characters.reducer";
import search from "./search.reducer";
import edit from "./edit.reducer";

export default combineReducers({ characters, search, edit });
