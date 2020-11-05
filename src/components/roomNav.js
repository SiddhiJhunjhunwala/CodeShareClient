import React, { useEffect } from "react";
import { Icon } from "@material-ui/core";
import { Face } from "@material-ui/icons";
import * as Actions from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

/**
 * @author
 * @function RoomNav
 **/

const RoomNav = (props) => {
  const dispatch = useDispatch();
  const participants = useSelector((state) => state.room.participants);
  const room_id = useSelector((state) => state.room.room_id);

  useEffect(() => {
    dispatch(Actions.getRoomParticipants(room_id));
  }, [dispatch, room_id]);

  return (
    <div className="room-nav">
      <header className="room-nav-header">Sid's Server</header>
      <div className="room-nav-content ">
        <div className="nav-sec">
          <h1 className="sec-head">Members</h1>

          {participants.map((item) => {
            return (
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
                &nbsp; {item.first_name} {item.last_name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomNav;
