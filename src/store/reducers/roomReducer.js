import {
  GET_ROOM_PARTICIPANTS,
  CREATE_ROOM_DIALOG,
  SET_CURRENT_ROOM,
  GET_ROOM_NAME,
} from "../types";

const room_id = window.location.pathname.split("/").slice(-1)[0];
const initialState = {
  participants: [],
  room_id: room_id,
  dialog: false,
  room_name: "",
};

export const room = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOM_PARTICIPANTS:
      return {
        ...state,
        participants: action.payload,
      };

    case CREATE_ROOM_DIALOG:
      return {
        ...state,
        dialog: action.payload,
      };

    case SET_CURRENT_ROOM:
      return {
        ...state,
        room_id: action.payload,
      };

    case GET_ROOM_NAME:
      return {
        ...state,
        room_name: action.payload,
      };

    default:
      return state;
  }
};
