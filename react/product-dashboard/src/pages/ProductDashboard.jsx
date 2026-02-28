import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const resp = await fetch("https://fakestoreapi.com/products");
        const data = await resp.json();

        console.log(data);

        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // filtered products can be generated based on products state

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Dashboard</h1>

      {/* 
        Search Box
        ProductList
        */}

      <SearchBar search={search} setSearch={setSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductDashboard;
