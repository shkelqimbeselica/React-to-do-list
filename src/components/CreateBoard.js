import React, { Component } from "react";
import Plus from "./Plus";
import style from "./Board.module.css";

class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.round} onClick={this.props.addBoard}>
        <Plus color="white" height="16px" width="16px" />
        <p style={styles.paragraph}>Create list</p>
      </div>
    );
  }
}

const styles = {
  paragraph: {
    marginLeft: "8px",
    fontFamily: "Source Sans Pro Bold",
    fontSize: "20px",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
};

export default CreateBoard;
