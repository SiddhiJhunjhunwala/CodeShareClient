import { React } from "react";
import { Switch, Route } from "react-router-dom";
import CodeEditor from "./components/codeEditor";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/code" component={CodeEditor} />
      </Switch>
      Hello
    </div>
  );
}
