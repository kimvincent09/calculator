import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [firstNum, setFirstNum] = useState(0);
  let [secondNum, setSecondNum] = useState(0);
  let sum = firstNum + secondNum;

  function reset() {
    setFirstNum(0)
    setSecondNum(0)
  }
  return (
    <div className="App">
      <input type="text" value={firstNum} onChange={e =>{setFirstNum(+e.target.value)}} />
      <h1>+</h1>
      <input type="text" value={secondNum} onChange={e =>{setSecondNum(+e.target.value)}}/>
      <h1>=</h1>
      <input type="text" value ={sum} disabled/>
      <button className = "reset" onClick={reset}>Reset</button>
    </div>
  );
}



export default App;
