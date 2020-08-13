import React, { useState, useCallback, useEffect } from "react";
import { Task } from "./Task";
import update from "immutability-helper";

const style = {
  width: 400,
};

export const Tasks = (props) => {
  {
    const [Tasks, setTasks] = useState([props.entries]);

    useEffect(() => {
      setTasks(props.entries);
    }, [props]);

    const moveTask = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = Tasks[dragIndex];
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
    const renderCard = (card, index) => {
      return (
        <Task
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveTask}
        />
      );
    };
    return (
      <>
        <div style={style}>{Tasks.map((task, i) => renderCard(task, i))}</div>
      </>
    );
  }
};
