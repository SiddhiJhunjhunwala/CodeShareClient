import React, { useEffect } from "react";
import { Icon } from "@material-ui/core";
import { List } from "@material-ui/icons";
import { getNotes } from "../store/actions/notesActions";
import { useDispatch, useSelector } from "react-redux";

const Notes = (props) => {
  const dispatch = useDispatch();
  const notes_list = useSelector((state) => state.notes.notes_list);
  useEffect(() => {
    dispatch(getNotes({ room_id: 3 }));
  }, [dispatch]);

  // console.log("helloo", notes_list);
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
        &nbsp; Notes - {notes_list.length}
      </h1>
      <button className="new-note">New Note +</button>
      <div className="notes-content">
        {notes_list.map((note) => {
          return note.data.length > 400 ? (
            <div className="note">
              {note.data.substring(0, 400)}
              <div className="read-more" onClick={() => {}}>
                &nbsp;Read more...
              </div>
            </div>
          ) : (
            <div className="note">{note.data}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
