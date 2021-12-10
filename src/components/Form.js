import React from "react";
import styles from "../styles/global.module.css";

const Form = ({ input, setInput, toDoList, setToDoList }) => {

  const inputHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
  }

  const addNewTaskHandler = (e) => {
    e.preventDefault();
    setToDoList([
      ...toDoList, { text: input, completed: false, id: Math.random() * 1000 }
    ])
    setInput("");
  }

  return (
    <div className={styles["form-container"]}>
      <form className={styles["form"]} action="" onSubmit={addNewTaskHandler}>
        <input
          className={styles["form-input"]}
          onChange={inputHandler}
          value={input}
          placeholder="Add a task.."
          type="text"
        />
        <button className={`${styles['form-btn']} fas fa-plus-square`}></button>
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
