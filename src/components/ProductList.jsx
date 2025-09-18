import React from 'react';
import ProductItem from './ProductItem';

// fake product data here, replace with lab data if provided
const PRODUCTS = [
  { id: 1, name: 'Milk', category: 'Dairy' },
  { id: 2, name: 'Cheese', category: 'Dairy' },
  { id: 3, name: 'Apples', category: 'Fruits' },
  { id: 4, name: 'Bananas', category: 'Fruits' },
];

export default function ProductList({ selectedCategory = 'all', onAddToCart }) {
  // figure out what to show depending on dropdown selection
  const visible =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0' }}>
      {/* map over the visible list and pass props down to ProductItem */}
      {visible.map(p => (
        <li key={p.id} style={{ marginBottom: '0.5rem' }}>
          <ProductItem
            name={p.name}
            category={p.category}
            onAddToCart={onAddToCart}
          />
        </li>
      ))}
    </ul>
  );
}
