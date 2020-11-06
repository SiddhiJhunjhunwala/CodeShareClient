import React, { useEffect, useState } from "react";
import { Icon } from "@material-ui/core";
import { List, BorderColor, DeleteForever } from "@material-ui/icons";
import {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
} from "../store/actions/notesActions";
import { useDispatch, useSelector } from "react-redux";

const Notes = (props) => {
  const dispatch = useDispatch();

  let [id, setId] = useState();
  let [data, setData] = useState();

  const notes_list = useSelector((state) => state.notes.notes_list);

  useEffect(() => {
    dispatch(getNotes({ room_id: 160447610 }));
  }, [dispatch]);

  const handleSave = (e) => {
    e.preventDefault();
    const dataform = new FormData(e.target);
    alert("Submitted data", dataform);
    if (id) {
      dispatch(updateNote({ note_id: id, data: data }));
      setId = 0;
    } else {
      dispatch(addNote({ room_id: 160447610, data: data }));
    }
    e.target.reset();
  };

  // const handleCreate = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   console.log("Submitted data", data);
  //   dispatch(addNote({ room_id: 160447610, data: data }));
  //   e.target.reset();
  // };

  const handleDelete = (id) => (e) => {
    alert("id", id);
    dispatch(deleteNote({ note_id: id }));
  };

  const handleUpdate = (id) => () => {
    dispatch(updateNote({ note_id: id, data: "Hello" }));
  };

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

      <div className="notes-content">
        <form
          onSubmit={handleSave}
          className="note-form"
          // style={{ display: "none" }}
        >
          <textarea
            className="note"
            id="new"
            name="data"
            required
            style={{ width: "93%" }}
            // onKeyDown={(self = this) => {
            //   setData = self.value;
            // }}
            // value={data}
          ></textarea>
          {/* <button className="save-note" type="submit">
            Save
          </button> */}
          <button type="submit" className="new-note">
            Save Note +
          </button>
        </form>

        <div className="notes-divider" />
        {notes_list.map((note) => {
          return (
            <div key={note.note_id}>
              {note.data.length > 400 ? (
                <div className="note">
                  {note.data.substring(0, 400)}
                  <div className="read-more">&nbsp;Read more...</div>
                  <div className="note-icons">
                    <button
                      className="edit-note"
                      onClick={() => {
                        setId = note.note_id;
                        setData = note.data;
                      }}
                      key={note.note_id}
                    >
                      <Icon
                        style={{
                          color: "#7289DA",
                          fontSize: "1.8rem",
                          fontWeight: "600",
                        }}
                      >
                        <BorderColor />
                      </Icon>
                    </button>
                    <button
                      className="delete-note"
                      key={note.note_id}
                      onClick={handleDelete(note.note_id)}
                      // onClick={() => {
                      //   setId = note.note_id;
                      //   return handleDelete(id);
                      // }}
                    >
                      <Icon
                        style={{
                          color: "red",
                          fontSize: "1.8rem",
                          fontWeight: "600",
                        }}
                      >
                        <DeleteForever />
                      </Icon>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="note">
                  {note.data}
                  <div className="note-icons">
                    <button
                      className="edit-note"
                      // onClick={handleUpdate(note.note_id)}
                      onClick={() => {
                        setId = note.note_id;
                        setData = note.data;
                      }}
                      key={note.note_id}
                    >
                      <Icon
                        style={{
                          color: "#7289DA",
                          fontSize: "1.8rem",
                          fontWeight: "600",
                        }}
                      >
                        <BorderColor />
                      </Icon>
                    </button>
                    <button
                      className="delete-note"
                      key={note.note_id}
                      onClick={handleDelete(note.note_id)}
                      // onClick={() => {
                      //   setId = note.note_id;
                      //   return handleDelete(id);
                      // }}
                    >
                      <Icon
                        style={{
                          color: "red",
                          fontSize: "1.8rem",
                          fontWeight: "600",
                        }}
                      >
                        <DeleteForever />
                      </Icon>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
