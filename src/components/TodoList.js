import React from "react";
import TodoItem from "./TodoItem";
import styles from "../styles/global.module.css";

const TodoList = ({ toDoList }) => {
  return (
    <div className={styles["toDoListContainer"]}>
      <ul className={styles["toDoList"]}>
        {toDoList.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
