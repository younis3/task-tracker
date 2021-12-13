import React, { useEffect, useState } from "react";
import styles from "../styles/TodoItem.module.css";

const TodoItem = ({ clickedItem, toDoList, setToDoList, slct }) => {

  const [isDraggable, setIsDraggable] = useState(true);

  useEffect(() => {
    slct === 'all' ? setIsDraggable(true) : setIsDraggable(false);
  }, [slct])

  const deleteTaskHandler = () => {
    document.getElementById('TodoContainer').classList.add('remove');

    setToDoList(toDoList.filter((el) => el.id !== clickedItem.id));
  };


  const completedTaskHandler = () => {
    setToDoList(
      toDoList.map((todo) => {
        if (todo.id === clickedItem.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className={`${styles["TodoContainer"]} ${!isDraggable ? styles["notDraggable"] : styles[""]}`} id="TodoContainer">
      {isDraggable ?
        <div>
          <div className={styles["drag-btn"]} disabled>
            <i className="fas fa-grip-lines" ></i>
          </div>
        </div>
        :
        <div></div>
      }
      <li
        className={`${styles["TodoItem"]} 
        ${clickedItem.completed ? styles["completed"] : styles[""]}`}
      >
        <div>{clickedItem.text}</div>
      </li>
      <button className={styles["check-btn"]} onClick={completedTaskHandler}>
        <i className="far fa-check-square fa-lg"></i>
      </button>
      <button className={styles["trash-btn"]} onClick={deleteTaskHandler}>
        <i className="far fa-trash-alt fa-lg"></i>
      </button>
    </div>
  );
};

export default TodoItem;
