import { GET_ROOM_PARTICIPANTS } from "../types";

const initialState = {
  participants: [],
  room_id: "",
};

export const room = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOM_PARTICIPANTS:
      return {
        ...state,
        participants: action.payload,
      };

    default:
      return state;
  }
};
