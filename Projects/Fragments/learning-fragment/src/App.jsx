import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "../Components/FoodItems";
import ErrorMessage from "../Components/errorMessage";

function App() {
  let fooditems = ["sabzi", "Green Veg", "roti", "Milk", "ghee"];
  // let fooditems = [];
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage item={fooditems}></ErrorMessage>
      <Fooditems item={fooditems}></Fooditems>
    </>
  );
}

export default App;
