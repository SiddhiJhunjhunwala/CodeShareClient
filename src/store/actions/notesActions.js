import API from "../../lib/api";
import { ADD_NOTE, GET_NOTES, DELETE_NOTE, UPDATE_NOTE } from "../types";

export function getNotes(data) {
  const result = API.post("/api/notes/getNotes", data);

  return (dispatch) =>
    result
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        dispatch({
          type: GET_NOTES,
          payload: response.data,
        });
      })
      .catch((Exception) => {
        console.log(Exception);
      });
}

export function addNote(data) {
  const result = API.post("/api/notes/createNote", data);
  return (dispatch) =>
    result
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        dispatch({
          type: ADD_NOTE,
          // payload: response.data,
        });
      })
      .catch((Exception) => {
        console.log(Exception);
      });
}

export function UpdateNote(data) {
  const result = API.post("/api/notes/updateNote", data);
  return (dispatch) =>
    result
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        dispatch({
          type: UPDATE_NOTE,
          // payload: response.data,
        });
      })
      .catch((Exception) => {
        console.log(Exception);
      });
}

export function daleteNote(data) {
  const result = API.post("/api/notes/deleteNote", data);
  return (dispatch) =>
    result
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        dispatch({
          type: DELETE_NOTE,
          // payload: response.data,
        });
      })
      .catch((Exception) => {
        console.log(Exception);
      });
}
