import { createStore, applyMiddleware } from "redux";
import combinedReducer from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

const preloaded_state = {};
export default createStore(
  combinedReducer,
  preloaded_state,
  applyMiddleware(thunk, logger)
);
