import './App.css';
import { useState } from "react";
import Form from './components/Form';



function App() {

  const [input, setInput] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Task Tracker App</h1>
      </header>
      <Form input={input} setInput= {setInput}/>
    </div>
  );
}

export default App;
