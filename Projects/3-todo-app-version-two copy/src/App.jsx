import { useState } from "react";
import Appname from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";
function App() {
  const [count, setCount] = useState(0);
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "10/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "10/10/2023",
    },
    {
      name: "like this video",
      dueDate: "10/10/2023",
    },
  ];

  return (
    <center className="todo-container">
      <Appname />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
