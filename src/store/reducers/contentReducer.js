import { SET_CONTENT_MODAL, SET_CONTENT_TEXT } from "../types";
const initialState = {
  modalOpen: false,
  text: "",
};

export const content = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENT_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case SET_CONTENT_MODAL:
      return {
        ...state,
        modalOpen: action.payload,
      };

    default:
      return state;
  }
};
