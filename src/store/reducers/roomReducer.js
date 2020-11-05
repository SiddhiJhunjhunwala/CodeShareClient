import { GET_ROOM_PARTICIPANTS, SET_ROOM_DIALOG } from "../types";

const initialState = {
  participants: [],
  room_id: "",
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

    default:
      return state;
  }
};
