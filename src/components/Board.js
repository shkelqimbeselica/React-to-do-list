import React, { Component } from "react";
import style from "./Board.module.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <div className={style.root}>
        <div className={style.container}>
          <div className={style.title}>
            <input
              placeholder="List title"
              type="text"
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
              className={style.titleInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
