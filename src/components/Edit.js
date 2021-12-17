import React, { useState } from "react";
import styles from "../styles/Edit.module.css";

const Edit = ({ setEditToggle, editItem, day, toDoList }) => {
  const [changedDay, setChangedDay] = useState(day);

  const saveChange = () => {

  }

  const changedDayHandler = (e) => {
    const val = e.target.dataset.id;
    setChangedDay(val);

  };

  const closeEditHandler = () => {
    setEditToggle(false);
  };

  return (
    <div className={styles.editContainer}>
      <div className={styles.editBorder}>
        <h3 className={styles.editTitle}>Change Task Day</h3>
        <h3 className={styles.edit}>{`${editItem.text} ${editItem.day}`}</h3>
        <ul className={styles.days}>
          <li
            className={`${styles.day} ${changedDay === "sun" ? styles.curDay : ""
              } `}
            data-id="sun"
            onClick={changedDayHandler}
          >
            Sun
          </li>

          <li
            className={`${styles.day} ${changedDay === "mon" ? styles.curDay : ""
              } `}
            data-id="mon"
            onClick={changedDayHandler}
          >
            Mon
          </li>

          <li
            className={`${styles.day} ${changedDay === "tue" ? styles.curDay : ""
              } `}
            data-id="tue"
            onClick={changedDayHandler}
          >
            tue
          </li>

          <li
            className={`${styles.day} ${changedDay === "wed" ? styles.curDay : ""
              } `}
            data-id="wed"
            onClick={changedDayHandler}
          >
            Wed
          </li>

          <li
            className={`${styles.day} ${changedDay === "thu" ? styles.curDay : ""
              } `}
            data-id="thu"
            onClick={changedDayHandler}
          >
            Thu
          </li>

          <li
            className={`${styles.day} ${changedDay === "fri" ? styles.curDay : ""
              } `}
            data-id="fri"
            onClick={changedDayHandler}
          >
            Fri
          </li>

          <li
            className={`${styles.day} ${changedDay === "sat" ? styles.curDay : ""
              } `}
            data-id="sat"
            onClick={changedDayHandler}
          >
            Sat
          </li>

          <li
            className={`${styles.day} ${changedDay === "later" ? styles.curDay : ""
              } `}
            data-id="later"
            onClick={changedDayHandler}
          >
            Later
          </li>
        </ul>

        <button className={styles.saveBtn} onClick={saveChange}>
          Save
        </button>
        <button className={styles.closeBtn} onClick={closeEditHandler}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Edit;
