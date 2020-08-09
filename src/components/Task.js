import React, { Component } from "react";

class Task extends Component {
  handleCheckboxChange = (e) => {
    let target = e.target;

    const task = target.closest(".task");
    if (target.checked) {
      task.style.textDecoration = "line-through";
    } else {
      task.style.textDecoration = "none";
    }

    this.props.checked(e.target.checked);
  };

  render() {
    return (
      <div className="task" style={style.main}>
        <div className="title">{this.props.title}</div>
        <div
          className="delete"
          style={{ marginLeft: "auto", marginRight: "16px", cursor: "pointer" }}
        >
          <input type="checkbox" onChange={this.handleCheckboxChange} />
        </div>
      </div>
    );
  }
}

const style = {
  main: {
    // width: "100%",
    padding: "8px 0 8px 16px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    backgroundColor: "rgba(190, 237, 217, 0.3)",
    marginTop: "8px",
    // boxShadow: "0 1px 0 rgba(9,30,66,.25)",
  },
};

export default Task;
