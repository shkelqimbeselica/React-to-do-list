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
    margin: "8px auto 0 auto",
    display: "flex",
    justifyContent: "flex-end",
    // borderBottom: "1px solid black",
    height: "82px",
    backgroundColor: "#FFF",
    borderRadius: "8px",
  },
};

export default Header;
