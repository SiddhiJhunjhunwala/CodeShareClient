import React from "react";
import { Grid, Box, Icon } from "@material-ui/core";
import NewRoomDialog from "./NewRoomDialog";
import * as Actions from "../store/actions";
import { useDispatch } from "react-redux";

export default function SideNav() {
  const dispatch = useDispatch();
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
          <button className="button-nav">SS</button>
          <button className="button-nav">SS</button>
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
