import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

const ProductList = ({ allProducts }) => {
  return (
    // imports module.css styling with the className products
    // to not conflict with global styles. This is not applicable for this example,
    // but used for illustration purposes.
    <div className={styles.products}>
      {allProducts.map((product) => (
        <ProductItem key={product.id} oneProduct={product} />
      ))}
    </div>
  );
};

export default ProductList;
