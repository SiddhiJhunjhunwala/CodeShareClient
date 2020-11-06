import React, { useEffect } from "react";
import { Grid, Box, Icon } from "@material-ui/core";
import NewRoomDialog from "./NewRoomDialog";
import * as Actions from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

export default function SideNav(props) {
  const dispatch = useDispatch();
  const my_rooms = useSelector((state) => state.room.my_rooms);

  const handleClick = (room_id) => {
    props.history.push(`/rooms/${room_id}`);
    window.location.reload();
  };

  useEffect(() => {
    dispatch(Actions.getMyRooms());
  }, [dispatch]);
  return (
    <>
      <Grid item xs={3}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          className="sidenavbar"
        >
          {/* Logo */}
          <button className="button-nav">
            <Icon></Icon>
          </button>
          {/* division */}
          <div className="divider"></div>
          {/* Rooms */}
          {my_rooms.map((item) => {
            return (
              <button
                key={item.room_id}
                onClick={() => handleClick(item.room_id)}
                className="button-nav"
              >
                {item.room_name[0]}
              </button>
            );
          })}

          {/* Create room  */}
          <button className="button-nav" id="create">
            <Icon
              style={{
                color: "#43B581",
                fontSize: "2.1rem",
                fontWeight: "600",
              }}
              onClick={() => dispatch(Actions.setDialog(true))}
            >
              +
            </Icon>
          </button>
        </Box>
      </Grid>
      <NewRoomDialog />
    </>
  );
}
