import React from "react";

function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "200px",
        borderRadius: "14px",
      }}
    >
      <img src={product.image}  alt={product.title}
      style={{width:'100px',height:'100px', objectFit:'contain'}}
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
