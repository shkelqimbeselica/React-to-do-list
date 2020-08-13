import React, { Component } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";

import Task from "./Task";
import styles from "./Board.module.css";
import { Draggable } from "react-beautiful-dnd";

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.grid = 8;
  }

  unmountComponent = (task) => {
    this.props.unmountComponent(task);
  };

  getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    // padding: this.grid * 2,
    margin: `0 0 ${this.grid * 2}px 0`,
    transform: isDragging ? "rotate(7deg)" : "none",

    // change background colour if dragging
    // background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  checked = (obj) => {
    this.props.checked(obj);
  };

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map((item, index) => {
      return (
        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={this.getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}
              >
                <Task
                  key={item.key}
                  unmountComponent={this.unmountComponent}
                  checked={this.checked}
                  title={item.text}
                />
              </div>
            );
          }}
        </Draggable>
      );
    });

    return <div className={styles.taskHolder}>{listItems}</div>;
  }
}

export default Tasks;
