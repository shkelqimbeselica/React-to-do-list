import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = { signUp: false };
  }

  // signUp = () => {};

  render() {
    let signUp = this.state.signUp;

    let entryPoint;
    if (signUp) {
      entryPoint = (
        <Signup handleCancel={() => this.setState({ signUp: false })} />
      );
    } else {
      entryPoint = <Login signUp={() => this.setState({ signUp: true })} />;
    }

    return <>{entryPoint}</>;
  }
}

export default Entry;
