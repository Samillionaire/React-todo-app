import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "../Components/FoodItems";
import ErrorMessage from "../Components/errorMessage";
import FoodInput from "../Components/FoodInput";
import Container from "../Components/Container";

function App() {
  

  let [fooditems,setFoodItems] = useState ([]);



  const onKeyDown = (event)=>{
    if(event.key==='Enter'){
      let newFoodItem = event.target.value;
      event.target.value="";
      let newItems = [...fooditems,newFoodItem];
      setFoodItems(newItems);
      console.log('New food item: ' +newFoodItem);
    }
  };
  

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage item={fooditems}></ErrorMessage>
        <Fooditems item={fooditems}></Fooditems>
      </Container>
    </>
  );
}

export default App;
