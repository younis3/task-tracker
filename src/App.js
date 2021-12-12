import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
//components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import DraggableTodoList from "./components/DraggableTodoList";

function App() {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [slct, setSlct] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    //get items from local storage
    if (localStorage.getItem("toDoList") === null) {
      localStorage.setItem("toDoList", JSON.stringify([]));
    } else {
      setToDoList(JSON.parse(localStorage.getItem("toDoList")));
    }
  }, []);


  useEffect(() => {
    //save to local storage
    localStorage.setItem("toDoList", JSON.stringify(toDoList));

  }, [toDoList, slct]);


  useEffect(() => {
    //toggle options (view all items/completed/uncompleted)
    switch (slct) {
      case "completed":
        setFilteredList(toDoList.filter((el) => el.completed === true));
        break;
      case "uncompleted":
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
      {
        slct === 'all' ?
          <DraggableTodoList
            toDoList={toDoList}
            setToDoList={setToDoList}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
            slct={slct}
          />
          :
          <TodoList
            toDoList={toDoList}
            setToDoList={setToDoList}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
            slct={slct}
          />
      }
    </div>
  );
}


export default App;
