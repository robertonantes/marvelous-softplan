import { combineReducers } from "redux";
import characters from "./characters.reducer";
import search from "./search.reducer";

export default combineReducers({ characters, search });
