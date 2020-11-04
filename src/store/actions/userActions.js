import API from "../../lib/api";

export function signup(data, history) {
  const result = API.post("/api/users/register", data);

  return (dispatch) =>
    result
      .then((response) => {
        if (response.status === 201) history.push("/login");
      })
      .catch((Exception) => {});
}

export function login(data, history) {
  const result = API.post("/api/users/login", data);

  return (dispatch) =>
    result
      .then((response) => {
        console.log(response);
        if (response.status === 200) history.push("/");
      })
      .catch((Exception) => {});
}
