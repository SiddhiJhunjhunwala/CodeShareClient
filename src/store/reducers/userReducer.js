// import * as ActionTypes from "../actionTypes";

const USERS = {
  user: "siddhi", // for thunk shift this to action creator
};

export const user = (state = USERS, action) => {
  switch (action.type) {
    // case ActionTypes.ADD_USER:
    // ADD USER DETAILS HERE IN A VARIABLE {ACTION.PAYLOAD}
    //   return state.concat(VARIABLE);
    default:
      return state;
  }
};
