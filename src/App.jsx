import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import CategoryFilter from './components/CategoryFilter'; // ← this line
import ProductList from './components/ProductList';
import Cart from './components/Cart';

// CategoryFilter pulled out into its own component

const App = () => {
  // main app state: items in cart + current filter, now cart is an object with item counts
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');

  // adds a product name into the cart array, increments count if already exists
  function handleAddToCart(productName) {
    setCart(prev => ({
      ...prev,
      [productName]: (prev[productName] || 0) + 1
    }));
  }

  // updates which category is being viewed
  function handleCategoryChange(nextCategory) {
    setSelectedCategory(nextCategory);
  }

  // removes an item from the cart or decrements its count
  function handleDeleteFromCart(productName) {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productName] > 1) {
        newCart[productName] -= 1;
      } else {
        delete newCart[productName];
      }
      return newCart;
    });
  }

  return (
    <div style={{ textAlign: 'center', minHeight: '100vh' }}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      {/* dark mode toggle button */}
      <DarkModeToggle />

      {/* filter dropdown controls category state */}
      <CategoryFilter value={selectedCategory} onChange={handleCategoryChange} />

      {/* list shows filtered products and handles add-to-cart */}
      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      {/* cart displays the added items + total, now with delete buttons */}
      <Cart items={cart} onDelete={handleDeleteFromCart} />
    </div>
  );
};

export default App;
