import { useState } from 'react'
import './App.css'
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='calculator'>
      <input type="text" id="display" />
      <div className="buttons-container">
        <button>C</button>
        <button></button >
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        </div>
    </div>
  );
}

export default App
