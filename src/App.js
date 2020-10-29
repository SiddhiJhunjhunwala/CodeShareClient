import { React } from "react";
import { Switch, Route } from "react-router-dom";
import CodeEditor from "./components/codeEditor";
import Pusher from "./pages/index";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/code" component={CodeEditor} />
        <Route path="/" component={Pusher} />
      </Switch>
    </div>
  );
}
