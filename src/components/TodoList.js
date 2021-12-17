import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import styles from "../styles/TodoList.module.css";

const TodoList = ({ toDoList, setToDoList, filteredList, slct, setEditToggle, setEditItem }) => {

  useEffect(() => {

  }, [])

  return (
    <div className={styles["toDoListContainer"]}>
      <ul className={styles["toDoList"]} id="ul">
        {filteredList.map((item) => (
          <TodoItem
            key={item.id}
            clickedItem={item}
            toDoList={toDoList}
            setToDoList={setToDoList}
            slct={slct}
            setEditToggle={setEditToggle}
            setEditItem={setEditItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
