import React, { useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
// import { clear } from 'console';
import CleanUp from './CleanUp';

const App:React.FC = () => {
  const [status, setStatus] =　useState<string | number>("text"); // | を使えばどちらか使える
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(true);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  useEffect(() => {
    console.log("useEffect in App invoke !");
    document.title = `current value is ${counter}`;
  },[counter]);//第二引数が指定されない場合レンダリングがされるたびに実行　空のオブジェクトが引数の初めだけ実行
  return (
    <div className="App">
      <header className="App-header">
        <h4>{status}</h4>
        <button onClick={() => setStatus(3)}>Button</button>
        <h4>{input}</h4>
        <input type="text" value={input} onChange={onChangeHandler} />
        <h4>{counter}</h4>
        <button onClick={() => setCounter((preCounter)=>preCounter+1)}>
          Increment
        </button>
        {display && <CleanUp />}
        <button onClick={()=>setDisplay}></button>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
