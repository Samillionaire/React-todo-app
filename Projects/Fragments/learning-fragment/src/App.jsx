import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "../Components/FoodItems";
import ErrorMessage from "../Components/errorMessage";
import FoodInput from "../Components/FoodInput";
import Container from "../Components/Container";

function App() {
  let fooditems = [
    "sabzi",
    "Green Veg",
    "roti",
    "Milk",
    "ghe",
    "hee",
    "ee",
    "bghee",
  ];
  const handleOnChange = (event)=>{
    console.log(event.target.value);
  };
  
  // let fooditems = [];
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage item={fooditems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <Fooditems item={fooditems}></Fooditems>
      </Container>
      {/* <Container>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          labore maxime sapiente cupiditate vero laborum est id. Ex aliquid vero
          nisi repellat iusto, et inventore dolore amet nemo natus rerum.
        </p>
      </Container> */}
    </>
  );
}

export default App;
