import { useState } from "react";
import Appname from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage  from "./Components/WelcomeMessage";

function App() {
  const [count, setCount] = useState(0);
  const initialTodoItems = [
    {
      name: "Dye Milk",
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems); 
  };

  return (
    <center className="todo-container">
      <Appname />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMessage></WelcomeMessage>
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;
