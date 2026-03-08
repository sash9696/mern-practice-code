import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
];

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <Link key={p.id} to={`/products/${p.id}`}>
            {" "}
            <li>{p.name}</li>{" "}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Products;
