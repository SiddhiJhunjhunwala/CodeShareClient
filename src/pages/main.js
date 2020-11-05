import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Notes from "../components/notes";
import RoomNav from "../components/roomNav";
import Editor from "../components/editor";
import * as Actions from "../store/actions";
import { Grid, Box, Icon } from "@material-ui/core";

const Main = (props) => {
  // const [showModal, setModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(Actions.verifyToken(token));
  }, [dispatch]);
  return (
    <React.Fragment>
      {/* <Modal
        open={showModal}
        onClose={() => {
          setModal = false;
        }}
      >
        Modal Text
      </Modal> */}
      <Grid container>
        <Grid container item xs={2} md={4} lg={2} style={{ height: "100vh" }}>
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
              <button
                className="button-nav"
                id="create"
                // onClick={() => {
                //   setModal = true;
                // }}
              >
                <Icon
                  style={{
                    color: "#43B581",
                    fontSize: "2.1rem",
                    fontWeight: "600",
                  }}
                >
                  +
                </Icon>
              </button>
            </Box>
          </Grid>

          <Grid item xs={9}>
            <RoomNav />
          </Grid>
        </Grid>
        <Grid item xs={10} md={8} lg={7}>
          <Editor />
        </Grid>
        <Grid item xs={12} lg={3}>
          <Notes />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Main;
