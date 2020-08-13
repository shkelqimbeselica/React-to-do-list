import React, { useState, useCallback, useEffect } from "react";
import { Task } from "./Task";
import update from "immutability-helper";
import styles from "./Board.module.css";

export const Tasks = (props) => {
  {
    const [Tasks, setTasks] = useState([props.entries]);

    useEffect(() => {
      setTasks(props.entries);
    }, [props]);

    const moveTask = useCallback(
      (dragIndex, hoverIndex) => {
        // console.log(dragIndex, hoverIndex);

        const dragCard = Tasks[dragIndex];
        console.log("dragCard: ", dragCard);
        console.log("Tasks: ", Tasks);

        setTasks(
          update(Tasks, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [Tasks]
    );

    const checked = (bool) => {
      if (bool) {
        // useCallback(
        //   (dragIndex, hoverIndex) => {
        //     const dragCard = Tasks[dragIndex];
        //     setTasks(
        //       update(Tasks, {
        //         $splice: [
        //           [dragIndex, 1],
        //           [hoverIndex, 0, dragCard],
        //         ],
        //       })
        //     );
        //   },
        //   [Tasks]
        // );
      }
    };

    const renderCard = (task, index) => {
      return (
        <Task
          key={task.id}
          index={index}
          id={task.id}
          text={task.text}
          moveCard={moveTask}
          unmountComponent={props.unmountComponent}
          checked={checked}
        />
      );
    };
    return (
      <>
        <div className={styles.taskHolder}>
          {Tasks.map((task, i) => renderCard(task, i))}
        </div>
      </>
    );
  }
};
