import React from "react";
import TodoItem from "./TodoItem";
import styles from "../styles/global.module.css";

const TodoList = ({ toDoList, setToDoList }) => {
  return (
    <div className={styles["toDoListContainer"]}>
      <ul className={styles["toDoList"]}>
        {toDoList.map((item) => (
          <TodoItem
            key={item.id}
            clickedItem={item}
            toDoList={toDoList}
            setToDoList={setToDoList}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
