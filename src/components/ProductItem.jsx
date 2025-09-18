import React from 'react'; 

// barebones version of a product row, just shows name + button
export default function ProductItem({ name, category, onAddToCart }) {
  return (
    <div style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
      <span>{name}</span>
      {/* when clicked, calls back up with the name */}
      <button onClick={() => onAddToCart(name)}>Add to Cart</button>
    </div>
  ); 
}