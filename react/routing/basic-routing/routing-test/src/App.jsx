import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

// WHy routing exists

// traditionally for each htnl page there is a new url
// /home -> home.html
// /products -> products.html
// /about -> about.html

// Each navigation causes:
// full page reload
// New html request
// Javascript reload

// SPA (the browser loads only one html page)
// Navaigation updates without reloading the page
// /products -> render Products component
// /about  ->  render About Component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </>
  );
}

export default App;
