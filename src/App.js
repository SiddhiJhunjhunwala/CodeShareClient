import { React } from "react";
import { Switch, Route } from "react-router-dom";
import CodeEditor from "./components/codeEditor";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
import ModalC from "./components/modal";
import PageNotFound from "./pages/404";
import Dashboard from "./pages/Dashboard";
import Pusher from "./pages/SyncingEditor/index";
import JoinRoomPage from "./pages/joinRoom";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/pusher" component={Pusher} />
        <ProtectedRoute exact path="/modal" component={ModalC} />
        <Route exact path="/rooms/:room_id" component={Main} />
        <ProtectedRoute exact path="/code" component={CodeEditor} />

        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/invitation/:room_id" component={JoinRoomPage} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </div>
  );
}
