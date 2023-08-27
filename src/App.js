import React, { Component } from "react";
import "./App.css";
import Timeline from "./Timeline";
import Page from "./Page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timeline />
        <Page />
      </div>
    );
  }
}

export default App;
