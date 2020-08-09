import React, { Component } from "react";
import Task from "./Task";
import Tasks from "./Tasks";
import style from "./Board.module.css";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title === undefined ? "My first list" : props.title,
      task: "",
      taskTitle: "",
      tasks: [],
      remainingTasks: 0,
    };

    this.taskTitle = "";
    this.taskRef = React.createRef();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEnter = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      let newItem = {
        text: e.target.value,
        key: Date.now(),
        checked: this.props.checked,
      };

      this.setState((prevState) => {
        return {
          task: "",
          tasks: prevState.tasks.concat(newItem),
          remainingTasks: prevState.remainingTasks + 1,
        };
      });
    }
  };

  checked = (bool) => {
    if (bool) {
      this.setState((prevState) => {
        return {
          remainingTasks: prevState.remainingTasks - 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          remainingTasks: prevState.remainingTasks + 1,
        };
      });
    }
  };

  handleFABclick = (e) => {
    const input = e.currentTarget.parentNode.firstChild;
    const img = e.currentTarget.firstChild;

    this.setState({ task: "" });

    input.focus();

    img.classList.toggle("expandedButton");
    input.classList.toggle("expandedInput");
  };

  render() {
    return (
      <div className={style.root}>
        <div className={style.container}>
          <div className={style.title}>
            <input
              placeholder="List title"
              type="text"
              name="title"
              value={this.state.title.toUpperCase()}
              onChange={this.handleChange}
              className={style.titleInput}
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                paddingLeft: "0",
              }}
            />
            <p style={{ marginLeft: "auto", marginRight: "20px" }}>
              Remaining tasks:{" "}
              <span style={{ fontFamily: "Source Sans Pro Bold" }}>
                {this.state.remainingTasks}
              </span>
            </p>
          </div>
          <Tasks checked={this.checked} entries={this.state.tasks} />
          {/* Footeri */}
        </div>
        <div className={style.expandedDiv}>
          <input
            type="text"
            name="task"
            placeholder="Add a new task"
            ref={this.taskRef}
            value={this.state.task}
            onChange={this.handleChange}
            onKeyUp={this.handleEnter}
            className="task-input"
            id="task-input"
            autoComplete="off"
          />
          <div
            className={style.floatingActionButton}
            onClick={this.handleFABclick}
          >
            <img
              style={{
                right: "16px",
                bottom: "16px",
                transition: "all 250ms ease-in-out",
              }}
              src="/Images/plus.png"
              width="16px"
              height="16px"
            />
          </div>
          <div className={style.title} style={styles.newTask}></div>
        </div>
      </div>
    );
  }
}

const styles = {
  newTask: {
    position: "absolute",
    bottom: "10px",
    display: "flex",
    alignItems: "center",
  },
};

export default Board;
