import { useState } from "react";
import Appname from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import Todoitem1 from "./Components/Todoitem1";
import Todoitem2 from "./Components/Todoitem2";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <center className="todo-container">
      <Appname />
      <AddTodo />
      <div className="items-container">
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </center>
  );
}

export default App;
