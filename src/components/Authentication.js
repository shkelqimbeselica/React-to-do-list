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
      console.log(user);
      if (user) {
        const username = user.displayName;
        this.setState({ user, username: username });

        // alert("Welcome, " + username);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  };

  render() {
    console.log(this.state.user);

    return (
      <div>
        {this.state.user ? <Home username={this.state.username} /> : <Entry />}
      </div>
    );
  }
}

export default Authentication;
