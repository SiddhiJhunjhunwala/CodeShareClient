import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import history from "../lib/history";
import * as Actions from "../store/actions";

export default function ProtectedRoute(props) {
  const Component = props.component;
  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isAuthenticated = true;
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(Actions.verifyToken(token, history));
    }
  }

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
}
