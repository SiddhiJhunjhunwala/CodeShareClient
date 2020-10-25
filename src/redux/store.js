import { createStore, combineReducers, applyMiddleware } from "redux";
import { red1 } from "./reducers/red1";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      red1: red1,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
