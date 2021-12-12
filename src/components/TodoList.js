import React from "react";
import TodoItem from "./TodoItem";
import styles from "../styles/TodoList.module.css";

const TodoList = ({ toDoList, setToDoList, filteredList, slct }) => {

    return (
        <div className={styles["toDoListContainer"]}>
            <ul className={styles["toDoList"]}>
                {filteredList.map((item) => (
                    <TodoItem
                        key={item.id}
                        clickedItem={item}
                        toDoList={toDoList}
                        setToDoList={setToDoList}
                        slct={slct}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;