import React from "react";
import { Grid } from "@material-ui/core";
import SideNav from "../components/SideNav";

export default function Dashboard(props) {
  return (
    <React.Fragment>
      <Grid container>
        <Grid container item xs={2} md={4} lg={2} style={{ height: "100%" }}>
          <Grid item xs={3} style={{ height: "100%", overflowY: "auto" }}>
            <SideNav {...props} />
          </Grid>
          <Grid item xs={9}>
            <div className="room-nav">
              <header className="room-nav-header"></header>
              <div className="room-nav-content ">
                <div className="nav-sec"></div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
