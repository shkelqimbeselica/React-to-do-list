import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false };

    this.taskRef = React.createRef();
  }

  handleCheckboxChange = (e) => {
    let target = e.target;

    const task = target.closest(".task");
    if (target.checked) {
      task.style.backgroundColor = "transparent";
      task.style.textDecoration = "line-through";
    } else {
      task.style.backgroundColor = "#F0F1FA";
      task.style.textDecoration = "none";
    }

    this.props.checked(e.target.checked);
  };

  componentDidMount() {
    let task = this.taskRef.current;
    task.classList.add("new-task-added");
    task.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }

  componentWillUnmount() {
    let task = this.taskRef.current;
    task.classList.remove("new-task-added");
  }

  handleDropdown = (e) => {
    this.setState({ dropdown: !this.state.dropdown });
  };

  deleteTask = (e) => {
    this.props.unmountComponent(this.taskRef.current);
  };

  render() {
    let dropdown = (
      <div style={style.dropdown}>
        <div onClick={this.deleteTask}>Delete</div>
      </div>
    );

    return (
      <div className="task" style={style.main} ref={this.taskRef}>
        <input type="checkbox" onChange={this.handleCheckboxChange} />
        <div className="title" style={style.title}>
          {this.props.title}
        </div>
        <div
          className="delete"
          style={{ marginLeft: "auto", marginRight: "16px", cursor: "pointer" }}
        >
          <div
            style={style.moreOptions}
            className="more-options"
            onClick={this.handleDropdown}
          >
            <svg
              style={{ width: "16px" }}
              id="Capa_1"
              enableBackground="new 0 0 515.555 515.555"
              // height="512"
              viewBox="0 0 515.555 515.555"
              // width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
              <path d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
              <path d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
            </svg>

            {this.state.dropdown ? dropdown : null}
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  main: {
    padding: "8px 0 8px 16px",
    height: "61px",
    position: "relative",
    left: "-500px",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    border: "1px solid #E6E7F0",
    backgroundColor: "#F0F1FA",
    marginBottom: "16px",
    // boxShadow: "0 1px 0 rgba(9,30,66,.25)",
  },
  title: {
    marginLeft: "16px",
  },
  moreOptions: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    position: "relative",
  },
  dropdown: {
    backgroundColor: "#FFF",
    width: "100px",
    height: "150px",
    position: "absolute",
    top: "25px",
    right: 0,
    border: "1px solid black",
    borderRadius: "8px",
  },
};

export default Task;
