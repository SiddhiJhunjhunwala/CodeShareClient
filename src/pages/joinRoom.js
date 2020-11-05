import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import * as Actions from "../store/actions";

export default function JoinRoom(props) {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = () => {
    const room_id = window.location.pathname.split("/").slice(-1)[0];
    console.log(room_id);
    dispatch(Actions.joinRoom(room_id, props.history));
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Join this Room ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Welcome to Codeshare !! Do'nt Worry we do not share your data
            anywhere
            <br /> Are you sure you want to join this room ??
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
