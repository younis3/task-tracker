import React, { useState } from "react";
import styles from "../styles/Edit.module.css";

const Edit = ({ setEditDropDown, editItem, day }) => {
  const [changeDay, setChangeDay] = useState(day);

  const changeDayHandler = (e) => {
    const val = e.target.dataset.id;
    setChangeDay(val);
  };

  const closeEditHandler = () => {
    setEditDropDown(false);
  };

  return (
    <div className={styles.editContainer}>
      <div className={styles.editBorder}>
        <h3 className={styles.editTitle}>Change Task Day</h3>
        <h3 className={styles.edit}>{editItem.text}</h3>
        <ul className={styles.days}>
          <li
            className={`${styles.day} ${
              changeDay === "sun" ? styles.curDay : ""
            } `}
            data-id="sun"
            onClick={changeDayHandler}
          >
            Sun
          </li>

          <li
            className={`${styles.day} ${
              changeDay === "mon" ? styles.curDay : ""
            } `}
            data-id="mon"
            onClick={changeDayHandler}
          >
            Mon
          </li>

          <li
            className={`${styles.day} ${
              changeDay === "tue" ? styles.curDay : ""
            } `}
            data-id="tue"
            onClick={changeDayHandler}
          >
            tue
          </li>

          <li
            className={`${styles.day} ${
              changeDay === "wed" ? styles.curDay : ""
            } `}
            data-id="wed"
            onClick={changeDayHandler}
          >
            Wed
          </li>

          <li
            className={`${styles.day} ${
              changeDay === "thu" ? styles.curDay : ""
            } `}
            data-id="thu"
            onClick={changeDayHandler}
          >
            Thu
          </li>

          <li
            className={`${styles.day} ${
              changeDay === "fri" ? styles.curDay : ""
            } `}
            data-id="fri"
            onClick={changeDayHandler}
          >
            Fri
          </li>

          <li
            className={`${styles.day} ${
              changeDay === "sat" ? styles.curDay : ""
            } `}
            data-id="sat"
            onClick={changeDayHandler}
          >
            Sat
          </li>

          <li
            className={`${styles.day} ${
              changeDay === "later" ? styles.curDay : ""
            } `}
            data-id="later"
            onClick={changeDayHandler}
          >
            Later
          </li>
        </ul>

        <button className={styles.saveBtn} onClick={closeEditHandler}>
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
