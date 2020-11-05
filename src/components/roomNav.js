import React from "react";
import { Icon } from "@material-ui/core";
import { Face } from "@material-ui/icons";

/**
 * @author
 * @function RoomNav
 **/

const RoomNav = (props) => {
  return (
    <div className="room-nav">
      <header className="room-nav-header">Sid's Server</header>
      <div className="room-nav-content ">
        <div className="nav-sec">
          <h1 className="sec-head">Members</h1>

          <div className="sec-content">
            <Icon
              style={{
                color: "#f9a719",
                fontSize: "1.8rem",
                fontWeight: "600",
              }}
            >
              <Face fontSize="large" />
            </Icon>
            &nbsp; siddhi...
          </div>
          <div className="sec-content">
            <Icon
              style={{
                color: "#f9a719",
                fontSize: "1.8rem",
                fontWeight: "600",
              }}
            >
              <Face fontSize="large" />
            </Icon>
            &nbsp; siddhi...
          </div>
          <div className="sec-content">
            <Icon
              style={{
                color: "#f9a719",
                fontSize: "1.8rem",
                fontWeight: "600",
              }}
            >
              <Face fontSize="large" />
            </Icon>
            &nbsp; siddhi...
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomNav;
