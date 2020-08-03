import React, { Component } from "react";
import style from "./Board.module.css";

class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.round} onClick={this.props.addBoard}>
        Krijo nje lsite
      </div>
    );
  }
}

export default CreateBoard;
