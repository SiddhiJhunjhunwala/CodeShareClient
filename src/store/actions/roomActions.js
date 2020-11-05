import API from "../../lib/api";
import { GET_ROOM_PARTICIPANTS } from "../types";

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
