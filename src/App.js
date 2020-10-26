import { React, Component } from "react";
import "./App.css";
import Main from "./Main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

// import "brace/theme/monokai";
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/mode-xml";
// import "ace-builds/src-noconflict/mode-ruby";
// import "ace-builds/src-noconflict/mode-sass";
// import "ace-builds/src-noconflict/mode-markdown";
// import "ace-builds/src-noconflict/mode-mysql";
// import "ace-builds/src-noconflict/mode-json";
// import "ace-builds/src-noconflict/mode-html";
// import "ace-builds/src-noconflict/mode-handlebars";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/mode-golang";
// import "ace-builds/src-noconflict/mode-csharp";
// import "ace-builds/src-noconflict/mode-elixir";
// import "ace-builds/src-noconflict/mode-typescript";
// import "ace-builds/src-noconflict/mode-css";

// export default class Main extends Component {
//   render() {
//     return (
//       <div>
//         <AceEditor
//           mode="html"
//           theme="monokai"
//           setOptions={{
//             enableBasicAutocompletion: true,
//             enableLiveAutocompletion: true,
//             enableSnippets: true,
//           }}
//         />
//       </div>
//     );
//   }
// }
