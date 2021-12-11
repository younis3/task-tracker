import React from "react";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

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
      />
      <TodoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
