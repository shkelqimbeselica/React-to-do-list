import React, { Component } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Tasks from "./Tasks";
import RemainingTasks from "./RemainingTasks";
import Plus from "./Plus";
import style from "./Board.module.css";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title === undefined ? "My list" : props.title,
      task: "",
      taskTitle: "",
      tasks: [],
      remainingTasks: 0,
      id: 0,
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
        id: Date.now(),
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

  removeTask = (target) => {
    if (!target.classList.contains("done")) {
      this.checked(true);
    }

    let tasks = this.state.tasks;
    let inputVal = target.children[1].textContent;

    var array = [...this.state.tasks]; // make a separate copy of the array
    let index = tasks.findIndex((x) => x.text === inputVal);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ tasks: array });
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

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const tasks = this.reorder(
      this.state.tasks,
      result.source.index,
      result.destination.index
    );

    console.log(result);

    this.setState({
      tasks,
    });
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
              value={this.state.title}
              onChange={this.handleChange}
              className={style.titleInput}
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                paddingLeft: "0",
              }}
            />
            <RemainingTasks tasks={this.state.remainingTasks} />
          </div>
          <DragDropContext id={this.props.id} onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <Tasks
                    unmountComponent={this.removeTask}
                    checked={this.checked}
                    entries={this.state.tasks}
                  />
                </div>
              )}
            </Droppable>
          </DragDropContext>
          {/* Footeri */}
        </div>
        <div className={style.expandedDiv}>
          <input
            type="text"
            name="task"
            placeholder="Write a note"
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
            <Plus color="white" height="26px" width="26px" />
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
