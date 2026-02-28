import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (products.length === 0) return <p>No products found</p>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
