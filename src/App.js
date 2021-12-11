import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [slct, setSlct] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    switch (slct.toLowerCase()) {
      case "completed":
        setFilteredList(toDoList.filter((el) => el.completed === true));
        break;
      case "not completed":
        setFilteredList(toDoList.filter((el) => el.completed === false));
        break;
      default:
        setFilteredList(toDoList);
    }
  }, [toDoList, slct]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Task Tracker App</h1>
      </header>
      <Form
        input={input}
        setInput={setInput}
        toDoList={toDoList}
        setToDoList={setToDoList}
        setSlct={setSlct}
      />
      <TodoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        filteredList={filteredList}
      />
    </div>
  );
}

export default App;
