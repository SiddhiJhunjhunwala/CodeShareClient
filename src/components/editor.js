import React from "react";
import Pusher from "../pages/SyncingEditor/index";

/**
 * @author
 * @function Editor
 **/

const Editor = (props) => {
  return (
    <div style={{ background: "#36393F", height: "100%" }}>
      <div className="editor-header">
        <div className="editor-heading">
          <span className="hash"># &nbsp;</span>Siddhi's Server
        </div>
      </div>
      <div className="sync-editor">
        <Pusher style={{ height: "100%" }} />
      </div>
    </div>
  );
};

export default Editor;
