import React, { useEffect } from "react";
import { Button, Icon } from "@material-ui/core";
import { GamesOutlined, List, ForwardOutlined } from "@material-ui/icons";
import axios from "axios";

const Notes = (props) => {
  useEffect(() => {
    const url = "http://localhost:5000/api/notes/getNotes";
    axios
      .get(url, { room_id: "1", user_id: "1" })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  return (
    <div className="notes" style={{ background: "#2F3136", height: "100%" }}>
      <div className="notes-header"></div>
      <h1 style={{ display: "inline-block" }} className="notes-heading">
        <Icon
          style={{
            color: "#7289DA",
            fontSize: "1.8rem",
            fontWeight: "600",
          }}
        >
          <List />
        </Icon>
        {/* &nbsp; Notes - {rawNotes.data.length}  */}
      </h1>
      <button className="new-note">New Note +</button>
      <div className="notes-content">
        {/* Data
        {note.text.len > 50 ? (
          <div className="note">
            {note.text}
            <div className="read-more">&nbsp;Read more...</div>
          </div>
        ) : (
          `${note}`
        )} */}
        {/* end */}
      </div>
    </div>
  );
};

export default Notes;
