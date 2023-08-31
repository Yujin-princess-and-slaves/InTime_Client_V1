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
            <div className="timeline">타임라인</div>
            <img className="Circle" alt="Timeline" src="img/Add Circle.svg" />
            <div className="timeline">새 일기 쓰기</div>
            <img className="Calendar" alt="Timeline" src="img/Calendar.svg" />
            <div className="timeline">달력</div>
            <img className="Fire" alt="Timeline" src="img/Flame.svg" />
            <div className="timeline">독촉하기</div>
            <img className="Setting" alt="Timeline" src="img/Settings.svg" />
            <div className="timeline">설정</div>
          </div>
          <img className="Alarm" alt="Timeline" src="img/Bell.svg" />
        </div>
      </div>
    );
  }
}

export default Timeline;
