import React, { useEffect, useState } from "react";
import styles from "../styles/Progress.module.css";

const Progress = ({ toDoList }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let totalCompleted = 0;
    toDoList.map((todo) => {
      return todo.completed ? totalCompleted++ : totalCompleted;
    });
    setPercent((totalCompleted / toDoList.length).toFixed(2) * 100);
  }, [toDoList]);

  return (
    <div className={styles["progressBar-container"]}>
      <div className={styles.progressParent}>
        <span
          className={styles.progressBar}
          style={{ width: `${percent}%` }}
        ></span>
        <div className={styles.progressText}>{percent.toFixed()}% Completed</div>
      </div>
    </div>
  );
};

export default Progress;
