import { combineReducers } from "redux";
import { user } from "./userReducer";
import { notes } from "./notesReducer";
import { room } from "./roomReducer";
// import { snackbarReducer } from "material-ui-toast";

export default combineReducers({
  user,
  notes,
  room,
  // snacbar: snackbarReducer,
});
