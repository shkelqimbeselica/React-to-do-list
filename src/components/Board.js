import React, { Component } from "react";
import Task from "./Task";
import Tasks from "./Tasks";
import style from "./Board.module.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
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

      this.setState(
        (prevState) => {
          return {
            task: "",
            tasks: prevState.tasks.concat(newItem),
            remainingTasks: prevState.remainingTasks + 1,
          };
        },
        () => {
          console.log(this.state.remainingTasks);
        }
      );
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
                // borderBottom: "none",
                paddingLeft: "0",
              }}
            />
            <p
              style={{ marginLeft: "auto", marginRight: "20px" }}
            >{`Remaining tasks: ${this.state.remainingTasks}`}</p>
          </div>
          <Tasks checked={this.checked} entries={this.state.tasks} />
          <div className="expanded-div">
            <input
              type="text"
              name="task"
              placeholder="Add a new task"
              ref={this.taskRef}
              value={this.state.task}
              onChange={this.handleChange}
              onKeyUp={this.handleEnter}
              className={style.titleInput}
            />

            <div className={style.floatingActionButton}>
              <img
                style={{
                  right: "16px",
                  bottom: "16px",
                }}
                src="/Images/plus.png"
                width="16px"
                height="16px"
              />
              <span></span>
            </div>
            <div className={style.title} style={styles.newTask}></div>
          </div>
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
