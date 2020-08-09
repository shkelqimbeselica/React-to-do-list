import React, { Component } from "react";
// import { Link } from "react-router-dom";
import fire from "../config/Firebase";
import "./Authentication.css";
import UserAuthenticationLayout from "./UserAuthenticationLayout";
import Signup from "./Signup";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null,
    };

    this.errorRef = React.createRef();
    this.owlRef = React.createRef();
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  handleChange = (e) => {
    const errorNode = this.errorRef.current;
    errorNode.textContent = "";
    this.setState({ [e.target.name]: e.target.value });
  };

  login = (e) => {
    const { email, password } = this.state;

    if (email !== "" && password !== "") {
      e.preventDefault();
      fire
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {})
        .catch((error) => {
          this.setState({ error: error.message }, () => {
            console.log(this.state.error);
          });
        });
    } else {
      const errorNode = this.errorRef.current;
      errorNode.textContent = "Please fill in your username and password.";
    }
  };

  // signup(e) {
  //   return <Signup />;
  // }

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

  render() {
    return (
      <UserAuthenticationLayout ref={this.owlRef} height="350px" width="315px">
        <form action="post">
          <label htmlFor="email">Email</label>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            type="email"
            className="authentication-input"
          />
          <label htmlFor="password">Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            type="password"
            className="authentication-input"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />

          <p className="error" ref={this.errorRef}>
            {this.state.error}
          </p>

          <div className="buttons">
            <div id="log-in-button" className="button" onClick={this.login}>
              Log in
            </div>

            <p id="create-one">Don't have an account yet?</p>

            <div
              id="create-account-button"
              className="button"
              onClick={this.props.signUp}
            >
              Create an account
            </div>
          </div>
        </form>
      </UserAuthenticationLayout>
    );
  }
}
export default Login;
