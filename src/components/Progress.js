import React, { useEffect, useState } from "react";
import styles from "../styles/Progress.module.css";

const Progress = ({ toDoList, day }) => {

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let totalCompleted = 0;
    let currDayCount = 0;
    toDoList.forEach(todo => {
      if (todo.day === day) {
        currDayCount++;
        if (todo.completed) {
          totalCompleted++;
        }
      }
    });
    if (currDayCount !== 0) {
      setPercent((totalCompleted / currDayCount).toFixed(2) * 100);
    }
  }, [toDoList, day]);

  return (
    <div className={styles["progressBar-container"]}>
      <div className={styles.progressParent}>
        <span
          className={styles.progressBar}
          style={{ width: `${percent}%` }}
        ></span>
        <div className={styles.progressText} id="pBar">{percent.toFixed()}% Completed</div>
      </div>
    </div>
  );
};

export default Progress;
