import API from "../../lib/api";
import { ADD_NOTE, GET_NOTES, DELETE_NOTE, UPDATE_NOTE } from "../types";

export function getNotes(data) {
  const result = API.post("/api/notes/getNotes", data);

  return (dispatch) =>
    result
      .then((response) => {
        // console.log("response", response);
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

export function updateNote(data) {
  const result = API.put("/api/notes/updateNote", data);
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

export function deleteNote(data) {
  const result = API.delete("/api/notes/deleteNote", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return (dispatch) =>
    result
      .then((response) => {
        console.log("response", response);
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
