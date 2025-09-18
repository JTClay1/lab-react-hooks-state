import React from 'react';
import ProductItem from './ProductItem';

const PRODUCTS = [
  { id: 1, name: 'Milk',    category: 'Dairy'  },
  { id: 2, name: 'Cheese',  category: 'Dairy'  },
  { id: 3, name: 'Apples',  category: 'Fruits' },
  { id: 4, name: 'Bananas', category: 'Fruits' }
];

export default function ProductList({ selectedCategory = 'all', onAddToCart }) {
  const visible =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0' }}>
      {visible.length ? (
        visible.map(p => (
          <li key={p.id} style={{ marginBottom: '0.5rem' }}>
            <ProductItem
              id={p.id}
              name={p.name}
              category={p.category}
              onAddToCart={onAddToCart}
            />
          </li>
        ))
      ) : (
        <li>No products available.</li>
      )}
    </ul>
  );
}
