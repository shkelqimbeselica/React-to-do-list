import React, { Component } from "react";
import Avatar from "../components/Avatar";

const Header = (props) => {
  return (
    <header style={style.header}>
      <Avatar username={props.username} />
    </header>
  );
};

const style = {
  header: {
    width: "calc(100% - 16px)",
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-end",
    height: "82px",
    backgroundColor: "#FFF",
    borderRadius: "8px",
    position: "relative",
    top: "8px",
  },
};

export default Header;
