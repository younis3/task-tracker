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
  const [day, setDay] = useState(null);
  const [editToggle, setEditToggle] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [removeMsg, setRemoveMsg] = useState(false);


  //get working day
  useEffect(() => {
    const today = Date().slice(0, 3).toLowerCase();
    setDay(today);

    if (localStorage.getItem('day') === null) {
      localStorage.setItem('day', JSON.stringify(today));  //set first day
    } else {
      setDay(JSON.parse(localStorage.getItem('day')));
    }
  }, []);


  //get items from local storage
  useEffect(() => {
    //get todo list
    if (localStorage.getItem(`toDoList${day}`) === null) {
      setToDoList([]);
      localStorage.setItem(`toDoList${day}`, JSON.stringify([]));
    } else {
      setToDoList(JSON.parse(localStorage.getItem(`toDoList${day}`)));
    }
  }, [day]);


  //toggle filtering options (view all items/completed/uncompleted)
  useEffect(() => {
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
  }, [toDoList, slct, day]);


  //save items to local storage
  useEffect(() => {
    //save working day
    localStorage.setItem('day', JSON.stringify(day));

    //save todo list
    localStorage.setItem(`toDoList${day}`, JSON.stringify(toDoList));

  }, [toDoList, day]);


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


  //allow page to scroll if todolist reaches certain length
  useEffect(() => {
    const app = document.getElementById('app');
    if (toDoList.length > 7) {
      app.style.position = 'relative';
      app.style.overflowY = 'scroll';
    }
    else {
      app.style.position = 'fixed';
      app.style.overflowY = 'hidden';
    }
  }, [toDoList])


  //show/hide double click to remove msg
  useEffect(() => {
    if (removeMsg) {
      setTimeout(() => {
        setRemoveMsg(false);
      }, 2800);
    }
  }, [removeMsg])



  return (
    <div className="App" id="app">
      <header className="App-header">
        <h1 className="title">Task Tracker Pro</h1>
        <h5 className="title2">Your Daily Task Management App</h5>
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

      {toDoList.length !== 0 && <Progress toDoList={toDoList} day={day} />}

      {slct === "all" ? (
        <DraggableTodoList
          toDoList={toDoList}
          setToDoList={setToDoList}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
          slct={slct}
          setEditToggle={setEditToggle}
          setEditItem={setEditItem}
          setRemoveMsg={setRemoveMsg}
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
          setRemoveMsg={setRemoveMsg}
        />
      )}

      {removeMsg && <p className="removeMsgHint" id="removeMsg">double click to remove</p>}

      {editToggle && <Edit className='overlay'
        day={day}
        setEditToggle={setEditToggle}
        editItem={editItem}
        setToDoList={setToDoList}
        filteredList={filteredList}
      />}
    </div>
  );
}


export default App;
