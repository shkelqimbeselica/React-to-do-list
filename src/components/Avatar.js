import React, { Component } from "react";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false };
  }

  render() {
    return (
      <div className="avatar" style={style.avatar}>
        <div className="left" style={{ marginLeft: "32px" }}>
          <h1 style={style.title}>Listify.</h1>
        </div>
      </div>
    );
  }
}

const style = {
  title: {
    fontSize: "24px",
    fontFamily: "Source Sans Pro",
    color: "#5160B8",
  },
  right: { marginRight: "32px", display: "flex", cursor: "pointer" },
  avatar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  paragraph: {
    marginRight: "8px",
    display: "flex",
    alignItems: "center",
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
