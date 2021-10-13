import React from "react";
import Message from "./Message";
import Notification from "./Notification";

const Timeline = () => {
  return (
    <div className="timeline">
      <h3>
        <i className="far fa-flag"></i>
        Timeline
      </h3>
      <Message />
      <Notification />
    </div>
  );
};

export default Timeline;
