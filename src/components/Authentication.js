import React, { Component } from "react";
import Home from "./Home";
import "./Authentication.css";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Home />
      </div>
    );
  }
}

export default Authentication;
