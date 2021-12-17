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
import Edit from "./components/Edit";


function App() {

  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [slct, setSlct] = useState("all");
  const [filteredList, setFilteredList] = useState([]);
  const [day, setDay] = useState('');
  const [editToggle, setEditToggle] = useState(false);
  const [editItem, setEditItem] = useState(null);


  //get items from local storage

  useEffect(() => {
    //get working day
    const today = Date().slice(0, 3).toLowerCase();
    setDay(today);

    if (localStorage.getItem('day') === null) {
      localStorage.setItem('day', JSON.stringify(today));  //set first day
    } else {
      setDay(JSON.parse(localStorage.getItem('day')));
    }
  }, []);


  useEffect(() => {
    //get todo list
    if (localStorage.getItem(`toDoList${day}`) === null) {
      setToDoList([]);
      localStorage.setItem(`toDoList${day}`, JSON.stringify([]));
    } else {
      setToDoList(JSON.parse(localStorage.getItem(`toDoList${day}`)));
    }
  }, [day]);


  //save items to local storage
  useEffect(() => {
    //save working day
    localStorage.setItem('day', JSON.stringify(day));

    //save todo list
    localStorage.setItem(`toDoList${day}`, JSON.stringify(toDoList));
  }, [toDoList, day]);


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


  //toggle background overlay when opening edit task modal
  useEffect(() => {
    const app = document.getElementById('app');
    if (editToggle) {
      app.classList.add('overlay');
    }
    else {
      app.classList.remove('overlay');
    }
  }, [editToggle])


  return (
    <div className="App" id="app">
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
        day={day}
      />

      <Days day={day} setDay={setDay} />

      {toDoList.length !== 0 ? (
        <Tabs
          slct={slct}
          setSlct={setSlct}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />) : (<div></div>)}

      {toDoList.length !== 0 && <Progress toDoList={toDoList} />}

      {slct === "all" ? (
        <DraggableTodoList
          toDoList={toDoList}
          setToDoList={setToDoList}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
          slct={slct}
          setEditToggle={setEditToggle}
          setEditItem={setEditItem}
        />
      ) : (
        <TodoList
          toDoList={toDoList}
          setToDoList={setToDoList}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
          slct={slct}
          setEditToggle={setEditToggle}
          setEditItem={setEditItem}
        />
      )}
      {editToggle && <Edit className='overlay' setEditToggle={setEditToggle} editItem={editItem} day={day} toDoList={toDoList} />}
    </div>
  );
}



export default App;
