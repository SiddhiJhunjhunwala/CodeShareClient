import { React } from "react";
import { Switch, Route } from "react-router-dom";
import CodeEditor from "./components/codeEditor";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
import ModalC from "./components/modal";
import PageNotFound from "./pages/404";

import Pusher from "./pages/SyncingEditor/index";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/rooms/:room_id" component={Main} />

        <Route path="/code" component={CodeEditor} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/pusher" component={Pusher} />
        <Route path="/modal" component={ModalC} />

        <Route path="/" component={PageNotFound} />
      </Switch>
    </div>
  );
}
