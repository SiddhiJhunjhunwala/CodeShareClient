import * as ActionTypes from "./actionTypes";
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
