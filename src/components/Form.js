import React from "react";
import styles from "../styles/Form.module.css";

const Form = ({ input, setInput, toDoList, setToDoList, setSlct }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addNewTaskHandler = (e) => {
    e.preventDefault();
    setToDoList([
      ...toDoList,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
  };

  const slctStatusHandler = (e) => {
    setSlct(e.target.value);
  };

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
        <button className={`${styles["form-btn"]} fas fa-plus-square`}></button>
        <select
          className={styles["form-select"]}
          name=""
          id=""
          onChange={slctStatusHandler}
        >
          <option className={styles["form-option"]} value="All">
            All
          </option>
          <option className={styles["form-option"]} value="Completed">
            Completed
          </option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
