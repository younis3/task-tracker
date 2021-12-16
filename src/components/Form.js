import React from "react";
import styles from "../styles/Form.module.css";

const Form = ({ input, setInput, toDoList, setToDoList }) => {

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addNewTaskHandler = (e) => {
    e.preventDefault();   //prevent page refresh on form submit
    //prevent user adding empty tasks
    if (input.trim() === "") {
      setInput("");   //in case user types empty spaces
      e.target.querySelector('input').focus();
      return;
    }
    //add item to list
    setToDoList([
      ...toDoList,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
  };


  return (
    <div className={styles["form-container"]}>
      <form className={styles["form"]} action="" onSubmit={addNewTaskHandler}>
        <input
          className={styles["form-input"]}
          onChange={inputHandler}
          value={input}
          placeholder="Add a new task"
          type="text"
        />
        <button className={`${styles["form-btn"]} fas fa-plus-square`}></button>
      </form>
    </div>
  );
};


export default Form;
