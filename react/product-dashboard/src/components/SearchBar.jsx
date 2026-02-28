import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search products..."
      style={{
        padding: "10px",
        width: "300px",
        marginBottom: "20px",
      }}
    />
  );
}

export default SearchBar;
