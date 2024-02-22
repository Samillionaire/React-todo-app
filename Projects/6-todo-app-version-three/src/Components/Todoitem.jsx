import { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";
function Todoitem({ todoName, todoDate }) {
  const{deleteItem} = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button"
          onClick={()=>deleteItem(todoName)}>
            <RiDeleteBin5Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
