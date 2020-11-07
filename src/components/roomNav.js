import React, { useEffect, useState } from "react";
import { Icon } from "@material-ui/core";
import { Face } from "@material-ui/icons";
import * as Actions from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import invite from "../images/invite.jpg";
/**
 * @author
 * @function RoomNav
 **/

const RoomNav = (props) => {
  const dispatch = useDispatch();

  const room_id = useSelector((state) => state.room.room_id);
  const room_name = useSelector((state) => state.room.room_name);

  const participants_central = useSelector((state) => state.room.participants);
  const [participants, set_participants] = useState([]);

  useEffect(() => {
    dispatch(Actions.getRoomParticipants(room_id));
    dispatch(Actions.getRoomName(room_id));
  }, [dispatch, room_id]);

  useEffect(() => {
    set_participants(participants_central);
  }, [participants_central]);

  return (
    <div className="room-nav">
      <header className="room-nav-header">{room_name}</header>
      <div className="room-nav-content ">
        <div className="nav-sec">
          <div className="invite">
            <img
              style={{ marginLeft: "7px" }}
              src={invite}
              width="80%"
              alt="invite"
            />
            <div className="invite-text">
              An adventure begins. Let's add some friends!
            </div>
            <button className="copy-link">Invite People</button>
          </div>
          <div className="notes-divider" />
          <h1 className="sec-head">Members</h1>
          <div className="participants">
            {participants.map((item) => {
              return (
                <div key={item.user_id} className="sec-content">
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
    </div>
  );
};

export default RoomNav;
