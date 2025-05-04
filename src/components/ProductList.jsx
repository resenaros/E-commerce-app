// ProductList component to display a list of products
// importing ProductItem component to render each product item
import ProductItem from "./ProductItem";
// importing CSS module for styling specific to ProductList component and children.
import styles from "./ProductList.module.css";

const ProductList = ({ allProducts }) => {
  return (
    // Using CSS module for styling the product list container.
    <div className={styles.products}>
      {/* Mapping through the allProducts array to render each product using the ProductItem component.*/}
      {allProducts.map((product) => (
        <ProductItem
          key={product.id} // using product id as key for each item.
          oneProduct={product} // passing the product object as a prop to ProductItem component.
        />
      ))}
    </div>
  );
};

// Exporting the ProductList component as default for use in other parts of the application.
export default ProductList;
