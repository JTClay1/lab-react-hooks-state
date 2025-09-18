import React from 'react';

// component just takes the items object and shows them with delete buttons
export default function Cart({ items, onDelete }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {/* loop through items, each one prints as "name is in your cart" with a delete button */}
        {Object.entries(items).map(([name, count]) => (
          <li key={name} style={{ marginBottom: '0.5rem' }}>
            {name} is in your cart. (x{count})
            <button
              onClick={() => onDelete(name)}
              style={{ marginLeft: '1rem' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* bonus: show running total of items */}
      <p><strong>Total items:</strong> {Object.values(items).reduce((sum, count) => sum + count, 0)}</p>
    </div>
  );
}