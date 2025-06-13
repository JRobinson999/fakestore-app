import React from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
// This component receives a list of products as props and maps over them to render a list of ProductItem components. Each ProductItem displays the product's name, price, and description. The key prop is used to help React identify which items have changed, are added, or are removed. The ProductList component is styled with CSS from ProductList.css.
// The ProductList component is a functional component that takes a `products` prop, which is an array of product objects. It maps over this array and renders a `ProductItem` for each product, passing the necessary props to display the product's details. The component is styled using an external CSS file, `ProductList.css`, to ensure a clean and organized layout for the product list.
