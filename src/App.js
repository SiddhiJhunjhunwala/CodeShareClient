import { React } from "react";
import { Switch, Route } from "react-router-dom";
// import CodeEditor from "./components/codeEditor";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
// import ModalC from "./components/modal";
import PageNotFound from "./pages/404";
import Dashboard from "./pages/Dashboard";
// import Pusher from "./pages/SyncingEditor/index";
import JoinRoomPage from "./pages/joinRoom";
import ProtectedRoute from "./components/ProtectedRoute";
import Toast from "./components/Toast";

export default function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
<<<<<<< HEAD
        {/* <ProtectedRoute exact path="/pusher" component={Pusher} /> */}
        {/* <ProtectedRoute exact path="/modal" component={ModalC} /> */}
        <ProtectedRoute exact path="/rooms/:room_id" component={Main} />
        {/* <ProtectedRoute exact path="/code" component={CodeEditor} /> */}
=======
        <ProtectedRoute exact path="/pusher" component={Pusher} />
        <ProtectedRoute exact path="/modal" component={ModalC} />
        <Route exact path="/rooms/:room_id" component={Main} />
        <ProtectedRoute exact path="/code" component={CodeEditor} />
>>>>>>> 7e94472980af0652d6746eac92509988360e7a29

        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/invitation/:room_id" component={JoinRoomPage} />
        <Route path="/toast" component={Toast} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </div>
  );
}
