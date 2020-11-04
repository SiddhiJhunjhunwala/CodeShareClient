import { React } from "react";
import { Switch, Route } from "react-router-dom";
import CodeEditor from "./components/codeEditor";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
import ModalC from "./components/modal";

import Pusher from "./pages/index";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />

        <Route path="/code" component={CodeEditor} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* <Route path="/code" component={CodeEditor} /> */}

        <Route path="/pusher" component={Pusher} />
        <Route path="/modal" component={ModalC} />
      </Switch>
    </div>
  );
}

// Main.js

// import { withRouter } from "react-router-dom";
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addUser } from "./store/actions";
// import CodeEditor from "./components/codeEditor";
// import { Route } from "react-router-dom";

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   addUser: (param1, param2) => dispatch(addUser(param1, param2)),
// });

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Route exact path="/code" component={CodeEditor} />
//       </React.Fragment>
//     );
//   }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
