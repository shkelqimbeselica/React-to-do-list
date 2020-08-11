import React, { Component } from "react";
import ReactDOM from "react-dom";
import Task from "./Task";
import styles from "./Board.module.css";

class Tasks extends Component {
  unmountComponent = (t) => {
    this.props.unmountComponent(t);
  };

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map((task) => {
      return (
        <Task
          key={task.key}
          unmountComponent={this.unmountComponent}
          title={task.text}
        />
      );
    });

    return <div className={styles.taskHolder}>{listItems}</div>;
  }
}

export default Tasks;
