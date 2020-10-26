import { createStore, applyMiddleware } from "redux";
import combinedReducer from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

// export default ConfigureStore = () => {
//   const store = createStore(combinedReducer, );
//   return store;
// };

const preloaded_state = {};
export default createStore(
  combinedReducer,
  preloaded_state,
  applyMiddleware(thunk, logger)
);
