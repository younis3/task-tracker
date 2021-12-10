import React from "react";
import styles from "../styles/global.module.css";

const Form = () => {
  return (
    <div className={styles["form-container"]}>
      <form className={styles["form"]} action="">
        <input
          className={styles["form-input"]}
          placeholder="Add a task.."
          type="text"
        />
        <button className= {`${styles['form-btn']} fas fa-plus-square`}></button>
        <select className={styles["form-select"]} name="" id="">
          <option className={styles["form-option"]} value="All">
            All
          </option>
          <option className={styles["form-option"]} value="Completed">
            Completed
          </option>
          <option value="Not Completed">
            Not Completed
          </option>
        </select>
      </form>
    </div>
  );
};

export default Form;
