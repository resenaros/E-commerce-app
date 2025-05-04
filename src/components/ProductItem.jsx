// importing scoped CSS module for styling the ProductItem component
import styles from "./ProductList.module.css";
// importing useState hook to manage state in the component
import { useState } from "react";

const ProductItem = ({ oneProduct }) => {
  // state to track the number of items in the cart for each product.
  const [cartCount, setCartCount] = useState(0);

  // Two functions added to handle adding and removing items from the cart,
  // indicated by the plus and minus buttons respectively.
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  const handleRemoveFromCart = () => {
    //ensures that the cart count does not go below zero.
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  // renders product details including image, name, price, description, and cart controls.
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

// Exporting the ProductItem component as default for use in other parts of the application.
export default ProductItem;
