import React from "react";
import styles from "../styles/Days.module.css";

const Days = ({ day, setDay }) => {
  const daySlct = (e) => {
    const val = e.target.dataset.id;
    setDay(val);
  };

  return (
    <div className={styles.daysContainer}>
      <ul className={styles.days}>
        <li
          className={`${styles.day} ${day === "sun" ? styles.clickedDay : ""} `}
          data-id="sun"
          onClick={daySlct}
        >
          Sun
        </li>
        <li
          className={`${styles.day} ${day === "mon" ? styles.clickedDay : ""} `}
          data-id="mon"
          onClick={daySlct}
        >
          Mon
        </li>
        <li
          className={`${styles.day} ${day === "tue" ? styles.clickedDay : ""} `}
          data-id="tue"
          onClick={daySlct}
        >
          Tue
        </li>
        <li
          className={`${styles.day} ${day === "wed" ? styles.clickedDay : ""} `}
          data-id="wed"
          onClick={daySlct}
        >
          Wed
        </li>
        <li
          className={`${styles.day} ${day === "thu" ? styles.clickedDay : ""} `}
          data-id="thu"
          onClick={daySlct}
        >
          Thu
        </li>
        <li
          className={`${styles.day} ${day === "fri" ? styles.clickedDay : ""} `}
          data-id="fri"
          onClick={daySlct}
        >
          Fri
        </li>
        <li
          className={`${styles.day} ${day === "sat" ? styles.clickedDay : ""} `}
          data-id="sat"
          onClick={daySlct}
        >
          Sat
        </li>
      </ul>
    </div>
  );
};

export default Days;
