import API from "../../lib/api";
import { GET_ROOM_PARTICIPANTS, SET_ROOM_DIALOG } from "../types";

export const setDialog = (newState) => {
  return (dispatch) =>
    dispatch({
      type: SET_ROOM_DIALOG,
      payload: newState,
    });
};

export const getRoomParticipants = (room_id) => {
  const result = API.get(`/api/room/getParticipants/${room_id}`);

  return (dispatch) =>
    result
      .then((response) => {
        dispatch({
          type: GET_ROOM_PARTICIPANTS,
          payload: response.data,
        });
      })
      .catch((Exception) => {
        console.log(Exception);
      });
};

// export const
