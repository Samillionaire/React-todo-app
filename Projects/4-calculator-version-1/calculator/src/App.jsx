 import { useState } from 'react'
// import './App.css'
import styles from './App.module.css';
import ButtonsContainer from './Components/ButtonsContainer';
import Display from './Components/Display';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App
