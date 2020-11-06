import React from "react";
import { withSnackbar } from "material-ui-toast";

/**
 * @author
 * @function Toast
 **/

const Toast = (props) => {
  const handleClick = (variant) => {
    const { snackbar } = props;
    const options = {
      message: variant,
      action: false,
      handleAction: () => {
        /* do something... */
      },
      close: true,
      variant: variant,
    };
    snackbar.show(options);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          this.handleClick("success");
        }}
      >
        Open Success Toast
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          this.handleClick("error");
        }}
      >
        Open Error Toast
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          this.handleClick("warning");
        }}
      >
        Open Warning Toast
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          this.handleClick("info");
        }}
      >
        Open info Toast
      </Button>
    </div>
  );
};

export default Toast;
