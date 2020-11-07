import { combineReducers } from "redux";
import { user } from "./userReducer";
import { notes } from "./notesReducer";
import { room } from "./roomReducer";
import { utils } from "./utilsReducer";

export default combineReducers({
  user,
  notes,
  room,
  utils,
});
