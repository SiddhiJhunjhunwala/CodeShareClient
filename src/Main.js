import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "./redux/actionCreator";

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
    return <div>Hello</div>;
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
