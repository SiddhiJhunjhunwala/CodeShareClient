import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Toast = (props) => {
  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open
        autoHideDuration={6000}
      >
        <Alert severity="success">This is a success message!</Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Toast;
