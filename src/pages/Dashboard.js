import React from "react";
import { Grid, Icon } from "@material-ui/core";
import { ViewComfy, Person } from "@material-ui/icons";
import SideNav from "../components/SideNav";

export default function Dashboard(props) {
  return (
    <React.Fragment>
      <Grid container>
        <Grid container item xs={2} lg={2} style={{ height: "100%" }}>
          <Grid item xs={3} style={{ height: "100%", overflowY: "auto" }}>
            <SideNav {...props} />
          </Grid>
          <Grid item xs={9}>
            <div className="room-nav">
              <header className="room-nav-header profile-header">
                <Icon
                  style={{
                    color: "#f9a719",
                    fontSize: "2rem",
                    fontWeight: "600",
                  }}
                >
                  <Person />
                </Icon>
                &nbsp; Profile
              </header>
              <div className="room-nav-content ">
                <div className="nav-sec">
                  {/* <div className="notes-divider" /> */}
                  <h1 className="sec-head">
                    <div className="profile-pic"></div>
                    <div className="details">
                      Siddhi Jhunjhunwala
                      <br />
                      <br />
                      siddhi2000jhun@gmail.com
                      <br />
                      <br />
                      7265462659
                    </div>
                  </h1>
                  <div className="participants"></div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <div className="dashboard">
            <div className="user-rooms-section">
              <h2 className="user-rooms-section-head">
                {" "}
                <Icon
                  style={{
                    color: "#7289DA",
                    fontSize: "2.9rem",
                    fontWeight: "600",
                  }}
                >
                  <ViewComfy />
                </Icon>{" "}
                &nbsp;Your Rooms
              </h2>
              <div className="user-rooms">
                <Grid container style={{ width: "100%", margin: "0px auto" }}>
                  <Grid item xs={2}>
                    <h4 className="user-room-name">Room Name</h4>
                    <div className="user-room">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy ...
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className="user-room-name">Room Name</h4>
                    <div className="user-room">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy ...
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className="user-room-name">Room Name</h4>
                    <div className="user-room">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy ...
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className="user-room-name">Room Name</h4>
                    <div className="user-room">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy ...
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className="user-room-name">Room Name</h4>
                    <div className="user-room">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy ...
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className="user-room-name">Room Name</h4>
                    <div className="user-room">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy ...
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className="user-room-name">Room Name</h4>
                    <div className="user-room">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy ...
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className="user-room-name">Room Name</h4>
                    <div className="user-room">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy ...
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className="user-room-name">Room Name</h4>
                    <div className="user-room">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy ...
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className="user-room-name">Room Name</h4>
                    <div className="user-room">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy ...
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="notes">
            <div className="notes-scrollable">
              <h1 className="notes-heading">
                <button class="logout">logout</button>
              </h1>
              <div className="notes-content"></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
