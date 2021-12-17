import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import styles from "../styles/TodoList.module.css";
import Edit from "./Edit";

const TodoList = ({ toDoList, setToDoList, filteredList, slct, editDropDown, setEditDropDown, setEditID }) => {

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
            editDropDown={editDropDown}
            setEditDropDown={setEditDropDown}
            setEditID={setEditID}
          />
        ))}
        {/* {editDropDown && <Edit />} */}
      </ul>
    </div>
  );
};

export default TodoList;
