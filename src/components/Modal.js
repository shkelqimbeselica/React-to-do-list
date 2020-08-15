import React, { Component } from "react";
import Plus from "./Plus";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div style={style.modal} className="modal">
        <div className="modal-container" style={style.container}>
          <div className="modal-title" style={style.modalTitle}>
            <h1 style={style.heading}>Name yout new list</h1>
            <p style={{ fontSize: "14px" }}>
              Your new list needs a name! Give it a go
            </p>
          </div>
          <input
            ref={this.inputRef}
            placeholder="Name of list"
            style={style.input}
            value={this.state.value}
            action="create"
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                this.props.handleModalClick({
                  value: this.state.value,
                  action: e.currentTarget.getAttribute("action"),
                });
              }
            }}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <div className="actions" style={style.actions}>
            <button
              style={style.button}
              action="create"
              onClick={(e) =>
                this.props.handleModalClick({
                  value: this.state.value,
                  action: e.currentTarget.getAttribute("action"),
                })
              }
            >
              Create list
            </button>
          </div>
        </div>
        <div
          style={style.closeModal}
          action="close"
          onClick={(e) =>
            this.props.handleModalClick({
              value: this.state.value,
              action: e.currentTarget.getAttribute("action"),
            })
          }
        >
          <Plus color="black" height="32px" width="32px" />
        </div>
      </div>
    );
  }
}

const style = {
  modal: {
    display: "flex",
    position: "absolute",
    height: "303px",
    width: "385px",
    backgroundColor: "white",
    zIndex: 999999,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
  },
  container: {
    width: "calc(100% - 68px)",
    height: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  actions: {
    display: "flex",
    width: "100%",
    height: "48px",
    margin: "16px auto 0 auto",
    justifyContent: "space-between",
  },
  button: {
    cursor: "pointer",
    fontFamily: "Source Sans Pro Bold",
    fontSize: "20px",
    outline: "none",
    border: "none",
    color: "#fff",
    width: "100%",
    borderRadius: "25px",
    backgroundColor: "#7482D3",
  },
  heading: {
    fontFamily: "Source Sans Pro Bold",
    fontSize: "24px",
    marginBottom: "8px",
  },
  modalTitle: {
    marginBottom: "32px",
    textAlign: "center",
  },
  input: {
    // padding: "4px 0 4px 4px",
    height: "48px",
    backgroundColor: "#F8F8FA",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    paddingLeft: "12px",
    width: "100%",
  },
  closeModal: {
    position: "absolute",
    top: "12px",
    right: "12px",
    transform: "rotate(45deg)",
    cursor: "pointer",
  },
};

export default Modal;
