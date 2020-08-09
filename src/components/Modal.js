import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div style={style.modal}>
        <input
          placeholder="name of list"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={() => this.props.handleModalClick(this.state.value)}>
          close modal
        </button>
      </div>
    );
  }
}

const style = {
  modal: {
    position: "absolute",
    height: "60%",
    width: "60%",
    backgroundColor: "white",
    zIndex: 999999,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export default Modal;
