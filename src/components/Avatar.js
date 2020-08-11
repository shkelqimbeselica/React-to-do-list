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
      <div className="avatar" style={style.avatar}>
        <div className="left" style={{ marginLeft: "32px" }}>
          <h1 style={style.title}>Listify.</h1>
        </div>
        <div className="right" onClick={this.handleClick} style={style.right}>
          <p style={style.paragraph}>{this.props.username}</p>
          <img style={style.img} />
          <div
            style={{ ...style.paragraph, marginLeft: "8px", marginRight: "0" }}
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{
                enableBackground: "new 0 0 512 512",
                width: "12px",
              }}
              // xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M506.157,132.386c-7.803-7.819-20.465-7.831-28.285-0.029l-207.73,207.299c-7.799,7.798-20.486,7.797-28.299-0.015
			L34.128,132.357c-7.819-7.803-20.481-7.79-28.285,0.029c-7.802,7.819-7.789,20.482,0.029,28.284l207.701,207.27
			c11.701,11.699,27.066,17.547,42.433,17.547c15.358,0,30.719-5.846,42.405-17.533L506.128,160.67
			C513.946,152.868,513.959,140.205,506.157,132.386z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
          {this.state.dropdown ? dropdown : null}
        </div>
      </div>
    );
  }
}

const style = {
  title: {
    fontSize: "24px",
    fontFamily: "Source Sans Pro Bold",
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
