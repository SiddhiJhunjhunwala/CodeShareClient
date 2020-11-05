import React from "react";
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
  //   const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.room.dialog);
  const setOpen = (newState) => {
    dispatch(Actions.setDialog(newState));
  };

  const handleClose = () => {
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            CREATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
