import React, { Component } from "react";
import "./Timeline.scss";

class Timeline extends Component {
  render() {
    return (
      <div className="Timeline">
        <div className="MyComponent">
          <div className="Profill" />
          <div className="Menu">
            <img className="Time" alt="Timeline" src="img/Clock Circle.svg" />
            <br />
            <img className="Circle" alt="Timeline" src="img/Add Circle.svg" />
            <br />
            <img className="Calendar" alt="Timeline" src="img/Calendar.svg" />
            <br />
            <img className="Fire" alt="Timeline" src="img/Flame.svg" />
            <br />
            <img className="Setting" alt="Timeline" src="img/Settings.svg" />
          </div>
          <img className="Alarm" alt="Timeline" src="img/Bell.svg" />
        </div>
      </div>
    );
  }
}

export default Timeline;
