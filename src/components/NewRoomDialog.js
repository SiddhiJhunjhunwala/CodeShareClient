import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../store/actions";

export default function FormDialog() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.room.dialog);
  const setOpen = (newState) => {
    dispatch(Actions.setDialog(newState));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [room_name, set_room_name] = useState("");
  const handleChange = (event) => {
    set_room_name(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(Actions.createRoom(room_name));
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">CREATE A NEW ROOM</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of the new Room to be created:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            type="email"
            fullWidth
            value={room_name}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            CREATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
