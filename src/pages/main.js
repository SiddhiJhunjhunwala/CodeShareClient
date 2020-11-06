import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Notes from "../components/notes";
import RoomNav from "../components/roomNav";
import Editor from "../components/editor";
import SideNav from "../components/SideNav";
import * as Actions from "../store/actions";
import { Grid } from "@material-ui/core";

const Main = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(Actions.verifyToken(token));
  }, [dispatch]);
  return (
    <React.Fragment>
      <Grid container>
        <Grid container item xs={2} md={4} lg={2} style={{ height: "100vh" }}>
          <SideNav />
          <Grid item xs={9}>
            <RoomNav />
          </Grid>
        </Grid>
        <Grid item xs={10} md={8} lg={7}>
          <Editor />
        </Grid>
        <Grid item xs={12} lg={3}>
          <Notes />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Main;
