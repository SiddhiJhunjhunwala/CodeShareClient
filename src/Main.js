import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "./redux/actionCreator";
import CodeEditor from "./components/codeEditor";
import { Route } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (param1, param2) => dispatch(addUser(param1, param2)),
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/code" component={CodeEditor} />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
