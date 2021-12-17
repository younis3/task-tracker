import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
//components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import DraggableTodoList from "./components/DraggableTodoList";
import Tabs from "./components/Tabs";
import Progress from "./components/Progress";
import Days from "./components/Days";

function App() {

  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [slct, setSlct] = useState("all");
  const [filteredList, setFilteredList] = useState([]);
  const [day, setDay] = useState("sun");


  useEffect(() => {
    //get items from local storage
    if (localStorage.getItem(`toDoList${day}`) === null) {
      localStorage.setItem(`toDoList${day}`, JSON.stringify([]));
    } else {
      setToDoList(JSON.parse(localStorage.getItem(`toDoList${day}`)));
    }
  }, [day]);


  useEffect(() => {
    //save to local storage
    localStorage.setItem(`toDoList${day}`, JSON.stringify(toDoList));
  }, [toDoList, slct, day]);


  useEffect(() => {
    //toggle options (view all items/completed/uncompleted)
    switch (slct) {
      case "completed":
        setFilteredList(toDoList.filter((el) => el.completed === true));
        break;
      case "active":
        setFilteredList(toDoList.filter((el) => el.completed === false));
        break;
      default:
        setFilteredList(toDoList);
    }
  }, [toDoList, slct]);


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Task Tracker</h1>
        <h5 className="title2">Your Weekly Task Management App</h5>
        <h5 className="title2">Developed by Y3.</h5>
      </header>
      <Form
        input={input}
        setInput={setInput}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />

      <Days day={day} setDay={setDay} />

      {toDoList.length !== 0 ? (
        <Tabs
          slct={slct}
          setSlct={setSlct}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />) : (<div></div>)}

      {toDoList.length !== 0 ? (
        <Progress toDoList={toDoList} />) : (<div></div>)}

      {slct === "all" ? (
        <DraggableTodoList
          toDoList={toDoList}
          setToDoList={setToDoList}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
          slct={slct}
        />
      ) : (
        <TodoList
          toDoList={toDoList}
          setToDoList={setToDoList}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
          slct={slct}
        />
      )}
    </div>
  );
}


export default App;
