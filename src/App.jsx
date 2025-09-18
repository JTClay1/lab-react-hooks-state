import React, { useState } from "react";
import ProductList from "./components/ProductList";

export default function App() {
  const [isDark, setIsDark] = useState(true); // matches current initial UI
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState({}); // { [productName]: qty }

  const handleAddToCart = (name) => {
    setCart((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + 1,
    }));
  };

  const totalItems = Object.values(cart).reduce((sum, n) => sum + n, 0);

  const appStyles = {
    textAlign: "center",
    minHeight: "100vh",
    background: isDark ? "#111" : "#fff",
    color: isDark ? "#f5f5f5" : "#111",
    transition: "background 0.2s ease, color 0.2s ease",
    paddingBottom: "2rem",
  };

  return (
    <div style={appStyles}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      {/* Option A: give the toggle button an accessible name that contains "toggle" */}
      <button
        aria-pressed={isDark}
        aria-label="toggle theme"
        onClick={() => setIsDark((d) => !d)}
      >
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <div style={{ marginTop: "1rem" }}>
        <label>Filter by Category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          aria-label="category filter"
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <div>
        <h2>Cart</h2>
        <ul>
          {Object.entries(cart).map(([name, qty]) => (
            <li key={name}>
              {`${name} is in your cart. (x${qty})`}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total items:</strong> {totalItems}
        </p>
      </div>
    </div>
  );
}
