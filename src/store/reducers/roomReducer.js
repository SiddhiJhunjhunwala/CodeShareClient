import {
  GET_ROOM_PARTICIPANTS,
  SET_ROOM_DIALOG,
  SET_CURRENT_ROOM,
} from "../types";

const initialState = {
  participants: [],
  room_id: "160431734",
  dialog: false,
};

export const room = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOM_PARTICIPANTS:
      return {
        ...state,
        participants: action.payload,
      };

    case SET_ROOM_DIALOG:
      return {
        ...state,
        dialog: action.payload,
      };

    case SET_CURRENT_ROOM:
      return {
        ...state,
        room_id: action.payload,
      };

    default:
      return state;
  }
};
