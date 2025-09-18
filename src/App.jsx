import React, { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("all");

  function handleAddToCart(productName) {
    setCart((prev) => ({ ...prev, [productName]: (prev[productName] || 0) + 1 }));
  }

  function handleDeleteFromCart(productName) {
    setCart((prev) => {
      const next = { ...prev };
      if (next[productName] > 1) next[productName] -= 1;
      else delete next[productName];
      return next;
    });
  }

  return (
    <div style={{ textAlign: "center", minHeight: "100vh" }}>
      <h1>🛒 Shopping App</h1>

      <DarkModeToggle />

      <CategoryFilter
        value={selectedCategory}
        onChange={setSelectedCategory}
      />

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart items={cart} onDelete={handleDeleteFromCart} />
    </div>
  );
}
