import React from "react";
import { products } from "../../ProductData";
import "./Product.css";
import NumberCounter from "./Counter";

function Products() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <NumberCounter></NumberCounter>
        </div>
      ))}
    </div>
  );
}

export default Products;
