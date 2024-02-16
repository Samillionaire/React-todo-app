import Item from "./Item";
const Fooditems = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Item key={item} fooditems={item} handleBuyButton={()=>console.log(`${item} Bought`)}>
          {" "}
        </Item>
      ))}
    </ul>
  );
};
export default Fooditems;
