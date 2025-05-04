import styles from "./ProductList.module.css";
import { useState } from "react";

const ProductItem = ({ oneProduct }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className={styles.productItem}>
      <img
        src={oneProduct.image}
        alt={oneProduct.name}
        className={styles.productImage}
      />
      <h1>{oneProduct.name}</h1>
      <p>${oneProduct.price}</p>
      <p>{oneProduct.description}</p>
      <div className={styles.cartButton}>
        <button onClick={handleRemoveFromCart} className={styles.minusButton}>
          -
        </button>
        <span className={styles.cartCount}>{cartCount}</span>
        <button onClick={handleAddToCart} className={styles.plusButton}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
