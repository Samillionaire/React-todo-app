import { useState,useRef } from "react";
import { IoAdd } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const noOfUpdates = useRef(0);
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`no of updates are : ${noOfUpdates.current}`)
  };
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
     onNewItem(todoName, dueDate);
     setTodoName("");
     setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
            
          >
            <IoAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
