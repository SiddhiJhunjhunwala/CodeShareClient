import API from "../../lib/api";
import { SET_AUTHENTICATED, SET_CURRENT_USER } from "../types";

export const signup = (data, history) => {
  const result = API.post("/api/users/register", data);

  return (dispatch) =>
    result
      .then((response) => {
        if (response.status === 201) history.push("/login");
      })
      .catch((Exception) => {});
};

export const login = (data, history) => {
  const result = API.post("/api/users/login", data);

  return (dispatch) =>
    result
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          dispatch({
            type: SET_CURRENT_USER,
            payload: response.data.user,
          });
          dispatch({
            type: SET_AUTHENTICATED,
            payload: true,
          });
          history.push("/dashboard");
        }
        // Else popup needs to be shown using Toaster
      })
      .catch((Exception) => {});
};

export const verifyToken = (token, history) => {
  const result = API.post("/api/users/verifyToken", { token });

  return (dispatch) =>
    result
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          dispatch({
            type: SET_CURRENT_USER,
            payload: response.data.user,
          });
          dispatch({
            type: SET_AUTHENTICATED,
            payload: true,
          });
          // history.push("/dashboard");
        }
        // Else popup needs to be shown using Toaster
      })
      .catch((Exception) => {});
};
