import React from "react";
import styles from "../styles/global.module.css";

const TodoItem = ({ text, completed, id }) => {
  return (
    <div className={styles["TodoContainer"]}>
      <li className={styles["TodoItem"]}>{text}</li>
      <button className={styles["check-btn"]}>
        <i className="far fa-check-square fa-lg"></i>
      </button>
      <button className={styles["trash-btn"]}>
        <i className="far fa-trash-alt fa-lg"></i>
      </button>
    </div>
  );
};

export default TodoItem;
