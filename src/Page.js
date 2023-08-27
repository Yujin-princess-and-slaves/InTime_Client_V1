import React, { Component } from "react";
import "./Page.scss";

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <img className="Clock" alt="Page" src="img/Clock Circle.svg" />
        <div className="font">
          <div className="Name">타임라인</div>
          <div className="a">우리가 쓴 일기를 시간 순으로 볼 수 있어요</div>
        </div>
        <div className="square" />
      </div>
    );
  }
}

export default Page;
