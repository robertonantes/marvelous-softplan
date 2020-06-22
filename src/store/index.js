import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import { cacheLatestCharacters } from "./middlewares/cache.middleware";

export default createStore(
  rootReducer,
  applyMiddleware(thunk, cacheLatestCharacters)
);
