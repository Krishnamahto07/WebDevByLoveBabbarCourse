import './App.css';
import {useState} from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">Counter App </header>
      <p className='para'>Increment & Decrement</p>

      <div className="outpur-field">

        <span className="digit-field" onClick={()=>setCount(count+1)}>+</span>
        <spna className="line"></spna>
        <span className="digit-field">{count}</span>
        <span className="line"></span>
        <span className="digit-field" onClick={()=>setCount(count-1)}>-</span>

      </div>
      <button className='btn' onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
