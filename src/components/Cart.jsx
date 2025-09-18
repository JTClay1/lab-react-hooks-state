// src/components/Cart.jsx
import React from "react";

export default function Cart({ items, onDelete }) {
  const entries = Object.entries(items); // [ [name, count], ... ]
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {entries.map(([name, count]) => (
          <li key={name} style={{ marginBottom: "0.5rem" }}>
            {`${name} is in your cart. (x${count})`}
            {onDelete && <button onClick={() => onDelete(name)} style={{ marginLeft: "1rem" }}>Delete</button>}
          </li>
        ))}
      </ul>
      <p><strong>Total items:</strong> {entries.reduce((s, [, c]) => s + c, 0)}</p>
    </div>
  );
}
