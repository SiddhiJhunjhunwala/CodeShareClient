import React from "react";
import { Button, Icon } from "@material-ui/core";
import { GamesOutlined, List, ForwardOutlined } from "@material-ui/icons";

/**
 * @author
 * @function Notes
 **/

const Notes = (props) => {
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
        &nbsp; Notes - N
      </h1>
      <button
        // size="small"
        // variant="outlined"
        style={
          {
            // borderRadius: "5px",
            // color: "#43B581",
            // border: "1px solid #43B581",
            // textTransform: "capitalize",
            // float: "right",
            // margin: "16px 16px 6px 16px",
          }
        }
        className="new-note"
      >
        New Note +
      </button>
      <div className="notes-content">
        <div className="note">
          Randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum.
          {/* <Icon
            style={{
              color: "#f9a719",
              fontSize: "0.7rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            <ForwardOutlined />
          </Icon> */}
          <div className="read-more">&nbsp;Read more...</div>
        </div>
        {/* <div className="divider notes-divider" /> */}
        <div className="note">
          There are many variations of passages of Lorem Ipsum available, but
          the majority don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum.
          <div className="read-more">&nbsp;Read more...</div>
        </div>
        {/* <div className="divider notes-divider" /> */}
        <div className="note">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
          <div className="read-more">&nbsp;Read more...</div>
        </div>
        {/* <div className="divider notes-divider" /> */}
        <div className="note">
          There are many variations of passages of Lorem Ipsum available, but
          the majority don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum.
          <div className="read-more">&nbsp;Read more...</div>
        </div>
        <div className="note">
          There are many variations of passages of Lorem Ipsum available, but
          the majority don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum.
          <div className="read-more">&nbsp;Read more...</div>
        </div>
        <div className="note">
          There are many variations of passages of Lorem Ipsum available, but
          the majority don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum.
          <div className="read-more">&nbsp;Read more...</div>
        </div>
        <div className="note">
          There are many variations of passages of Lorem Ipsum available, but
          the majority don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum.
          <div className="read-more">&nbsp;Read more...</div>
        </div>
        <div className="note">
          There are many variations of passages of Lorem Ipsum available, but
          the majority don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum.
          <div className="read-more">&nbsp;Read more...</div>
        </div>
        <div className="note">
          There are many variations of passages of Lorem Ipsum available, but
          the majority don't look even slightly believable. If you are going to
          use a passage of Lorem Ipsum.
          <div className="read-more">&nbsp;Read more...</div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
