import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

// React re renders components when
//state change
// props change
//parent component or context renders

// sometimes it can cause unnecesary works

// example a large product list with filters

// if every product card re renders on every filter change , performance would drop

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return <div>
    
    <h1>Product Store</h1>

    <input
      placeholder="Search products"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <ProductList
      products={products}
      search={search}
    />

  </div>;
}

export default App;
