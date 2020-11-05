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
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute path="/pusher" component={Pusher} />
        <ProtectedRoute path="/modal" component={ModalC} />
        <ProtectedRoute exact path="/rooms/:room_id" component={Main} />
        <ProtectedRoute path="/code" component={CodeEditor} />

        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </div>
  );
}
