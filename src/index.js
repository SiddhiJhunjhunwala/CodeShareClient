import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";
import "./App.css";

import history from "./lib/history";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <SnackbarProvider
        SnackbarProps={{ autoHideDuration: 3000 }}
        direction={{ vertical: "center", horizontal: "center" }} */}
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
      {/* // ></SnackbarProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
