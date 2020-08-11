import React, { Component } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";

import Checkbox from "./Checkbox";
import "./Task.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false };

    this.taskRef = React.createRef();
    this.lineRef = React.createRef();
  }

  handleCheckboxChange = (e) => {
    let target = e.target;
    let line = this.lineRef.current;

    const task = target.closest(".task");
    if (target.checked) {
      task.style.backgroundColor = "transparent";
      task.classList.add("done");
      line.classList.add("line-full");
    } else {
      task.style.backgroundColor = "#F0F1FA";
      line.classList.remove("line-full");
      task.classList.remove("done");
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

  handleDropdown = (e) => {
    this.setState({ dropdown: !this.state.dropdown });
  };

  deleteTask = (e) => {
    let task = this.taskRef.current;
    task.classList.remove("new-task-added");
    setTimeout(() => {
      this.props.unmountComponent(this.taskRef.current);
    }, 400);
  };

  pinTask = (e) => {
    console.log(e);
  };

  render() {
    let dropdown = (
      <div style={style.dropdown}>
        <div onClick={this.deleteTask}>Delete</div>
        <div onClick={this.pinTask}>Pin</div>
      </div>
    );

    return (
      <div className="task" style={style.main} ref={this.taskRef}>
        {/* <input type="checkbox" onChange={this.handleCheckboxChange} /> */}

        <Checkbox
          checked={this.state.checked}
          onChange={this.handleCheckboxChange}
        />

        <div className="title" style={style.title}>
          <div className="fill-line-through">
            <div className="line" ref={this.lineRef}></div>
          </div>
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
    borderRadius: "8px",
    border: "1px solid rgb(240, 241, 250)",
    backgroundColor: "rgb(240, 241, 250)",
    marginBottom: "16px",
    transition: "400ms ease-in-out",

    // boxShadow: "0 1px 0 rgba(9,30,66,.25)",
  },
  title: {
    marginLeft: "16px",
    position: "relative",
  },
  moreOptions: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    position: "relative",
  },
  dropdown: {
    backgroundColor: "rgb(240, 241, 250)",
    width: "70px",
    height: "110px",
    position: "absolute",
    top: "25px",
    right: 0,
    border: "2px solid #FFF",
    borderRadius: "8px",
    zIndex: 2,
  },
};

export default Task;
