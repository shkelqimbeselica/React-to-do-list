import React, { Component } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";

import Task from "./Task";
import styles from "./Board.module.css";

class Tasks extends Component {
  unmountComponent = (task) => {
    this.props.unmountComponent(task);
  };

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map((task) => {
      return (
        <Task
          key={task.key}
          unmountComponent={this.unmountComponent}
          checked={this.props.checked}
          title={task.text}
        />
      );
    });

    return <div className={styles.taskHolder}>{listItems}</div>;
  }
}

export default Tasks;
