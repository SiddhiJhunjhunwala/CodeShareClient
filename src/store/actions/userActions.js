import * as ActionTypes from "../types";
// import user files here

export const fetchUser = () => (dispatch) => {};

export const addUser = (param1, param2) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: {
      user: param1,
      id: param2,
    },
  };
};
