import Item from "./Item";
const Fooditems = ({ item }) => {
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Item key={item} fooditems={item}>
          {" "}
        </Item>
      ))}
    </ul>
  );
};
export default Fooditems;
