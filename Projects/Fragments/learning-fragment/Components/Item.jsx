import styles from "./Item.module.css";
const Item = ({ fooditems }) => {
  return (
    <li className={`${styles["kg-items"]}`}>
      <span className={styles["kg-span"]}> {fooditems} </span>
    </li>
  );
};
export default Item;
