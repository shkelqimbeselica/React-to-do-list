import React, { useRef, useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import Checkbox from "./Checkbox";
import "./Task.css";

export const Task = (props) => {
  const taskRef = useRef(null);
  const lineRef = useRef(null);
  const [Dropdown, setDropdown] = useState(false);
  let id = props.id;
  let index = props.index;
  let moveCard = props.moveCard;

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!taskRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = taskRef.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(taskRef));

  useEffect(() => {
    let task = taskRef.current;
    setTimeout(() => {
      task.classList.add("new-task-added");
    }, 20);
    task.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, []);

  const handleCheckboxChange = (e) => {
    let target = e.target;
    let line = lineRef.current;

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

    props.checked(e.target.checked);
  };

  const deleteTask = (e) => {
    let task = taskRef.current;
    task.classList.remove("new-task-added");
    setTimeout(() => {
      props.unmountComponent(taskRef.current);
    }, 400);
  };

  const handleDropdown = (e) => {
    setDropdown(!Dropdown);
  };

  const pinTask = (e) => {
    console.log(e);
  };

  const onDragStart = (e) => {
    e.currentTarget.style.opacity = "0.4";
  };

  const onDragEnter = (e) => {
    e.currentTarget.classList.add("over");
  };

  const onDragLeave = (e) => {
    e.currentTarget.classList.remove("over");
  };

  const onDragEnd = (e) => {
    e.currentTarget.style.opacity = 1;
  };

  let dropdownDiv = (
    <div style={style.dropdown}>
      <div onClick={deleteTask}>Delete</div>
      <div onClick={pinTask}>Pin</div>
    </div>
  );
  // if (isDragging) {
  //   return <div ref={taskRef} />;
  // }
  return (
    <div
      className="task"
      style={style.main}
      ref={taskRef}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragEnd={onDragEnd}
      id={props.id}
    >
      <Checkbox onChange={handleCheckboxChange} />
      <div className="title" style={style.title}>
        <div className="fill-line-through">
          <div className="line" ref={lineRef}></div>
        </div>
        {props.text}
      </div>
      <div
        className="delete"
        style={{
          marginLeft: "auto",
          marginRight: "16px",
          cursor: "pointer",
        }}
      >
        <div
          style={style.moreOptions}
          className="more-options"
          onClick={handleDropdown}
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

          {Dropdown ? dropdownDiv : null}
        </div>
      </div>
    </div>
  );
};

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
    transition: "left 400ms ease-in-out",
    cursor: "grab",
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
