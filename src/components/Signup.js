import React, { Component } from "react";
import UserAuthenticationLayout from "./UserAuthenticationLayout";

import fire, { database } from "../config/Firebase";

import "./Authentication.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      error: null,
    };

    this.owlRef = React.createRef();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  writeUserData = (userId, name, email) => {
    database.ref("users/" + userId).set({
      username: name,
      email: email,
    });
  };

  handleBlur = () => {
    let owlRef = this.owlRef.current;
    const allElements = owlRef.querySelectorAll("*");
    for (let element of allElements) {
      element.classList.remove("password");
    }
  };

  handleFocus = () => {
    let owlRef = this.owlRef.current;
    const allElements = owlRef.querySelectorAll("*");
    for (let element of allElements) {
      element.classList.add("password");
    }
  };

  signUp = (e) => {
    e.preventDefault();

    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => {
        return result.user.updateProfile({
          displayName: this.state.name,
        });
      })
      .then((u) => {})
      .catch((error) => {
        this.setState({ error: error.message }, () => {
          console.log(this.state.error);
        });
      });
  };

  render() {
    return (
      <UserAuthenticationLayout ref={this.owlRef} width="368px" height="300px">
        <div className="sign-up-page-intro">
          <h2>Sign up</h2>
          <p>It won't take much of your time</p>
        </div>
        <form>
          <div className="name-surname">
            <div className="name credential">
              {/* <label htmlFor="name">Name</label> */}
              <input
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                type="name"
                className="authentication-input"
                placeholder="First name"
              />
            </div>
            <div className="surname credential">
              {/* <label htmlFor="surname">surname</label> */}
              <input
                value={this.state.surname}
                onChange={this.handleChange}
                name="surname"
                type="surname"
                className="authentication-input"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="email-password">
            {/* <label htmlFor="email">Email</label> */}
            <input
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              type="email"
              className="authentication-input"
              placeholder="Email"
            />
            {/* <label htmlFor="password">Password</label> */}
            <input
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              className="authentication-input"
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              placeholder="Password"
            />
            <p className="error">{this.state.error}</p>

            <div className="sign-up-page-buttons">
              <div
                id="cancel-sign-up"
                className="cancel-button sign-up-page-button button"
                onClick={this.props.handleCancel}
              >
                Cancel
              </div>
              <div
                id="sign-up-button"
                className="sign-up-button sign-up-page-button button"
                onClick={this.signUp}
              >
                Sign up
              </div>
            </div>
          </div>
        </form>
      </UserAuthenticationLayout>
    );
  }
}

export default Signup;
