import React, { Component } from "react";
import fire from "../config/Firebase";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false };
  }

  logOut = () => {
    fire.auth().signOut();
  };

  handleClick = (e) => {
    this.setState({ dropdown: !this.state.dropdown });
  };

  render() {
    let dropdown = (
      <div style={style.dropdown}>
        <div onClick={this.logOut} style={style.dropdownButton}>
          Log out
        </div>
      </div>
    );

    return (
      <div className="avatar" style={style.avatar} onClick={this.handleClick}>
        <p style={{ marginRight: "16px" }}>{this.props.username}</p>
        <img style={style.img} />
        {this.state.dropdown ? dropdown : null}
      </div>
    );
  }
}

const style = {
  avatar: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
  },
  img: {
    height: "32px",
    width: "32px",
    borderRadius: "50%",
    border: "1px solid black",
  },
  dropdown: {
    width: "144px",
    height: "auto",
    background: "white",
    position: "absolute",
    top: "64px",
    right: 0,
  },
  dropdownButton: {
    height: "40px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
  },
};

export default Avatar;
