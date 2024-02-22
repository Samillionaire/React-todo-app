import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Todoitem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></Todoitem>
      ))}
    </div>
  );
};
export default TodoItems;
