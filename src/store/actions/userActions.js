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
