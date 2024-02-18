import Item from "./Item";
import { useState } from "react";
const Fooditems = ({ item }) => {
  let [activeItems,setActiveItems] = useState([]);
  let onBuyButton =(item,event)=>{
    let newItems = [...activeItems,item];
    setActiveItems(newItems);
  }
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Item key={item} fooditems={item}
        bought={activeItems.includes(item)} 
        handleBuyButton={(event)=>onBuyButton(item,event)}>
        </Item>
      ))}
    </ul>
  );
};
export default Fooditems;
