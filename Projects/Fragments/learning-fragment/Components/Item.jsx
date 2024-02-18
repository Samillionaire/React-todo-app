import styles from "./Item.module.css";
const Item = ({ fooditems,bought, handleBuyButton }) => {
  return (
    <li className={`${styles["kg-items"]} list-group-item ${bought && 'active'}`}>
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
