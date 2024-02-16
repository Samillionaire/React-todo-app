import styles from "./Item.module.css";
const Item = ({ fooditems, handleBuyButton }) => {
  return (
    <li className={`${styles["kg-items"]} class="list-group-item"`}>
      <span className={styles["kg-span"]}> {fooditems} </span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
