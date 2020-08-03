import React, { Component } from "react";
import fire from "../config/Firebase";

import Home from "./Home";
import Entry from "./Entry";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, username: "" };
  }

  componentDidMount() {
    this.handleAuthentication();
  }

  handleAuthentication = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const username = user.displayName;
        this.setState({ user, username: username });
      } else {
        this.setState({ user: null });
      }
    });
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        {this.state.user ? <Home username={this.state.username} /> : <Entry />}
      </div>
    );
  }
}

export default Authentication;
