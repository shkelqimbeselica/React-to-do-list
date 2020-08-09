import React, { Component } from "react";
import Task from "./Task";
import styles from "./Board.module.css";

class Tasks extends Component {
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map((task) => {
      return (
        <Task key={task.key} checked={this.props.checked} title={task.text} />
      );
    });

    return <div className={styles.taskHolder}>{listItems}</div>;
  }
}

export default Tasks;
