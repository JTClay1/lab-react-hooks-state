import React from "react";

/**
 * Cart display.
 * - `items` is an object map: { [name]: count }
 * - We list each item as: "<Name> is in your cart. (x<count>)"
 *   → matches the test's text queries.
 * - Optional Delete button calls back with the item's name.
 * - Also shows a running total count at the bottom (bonus, non-breaking).
 */
export default function Cart({ items, onDelete }) {
  // easier to render as entries
  const entries = Object.entries(items); // [ [name, count], ... ]

  return (
    <div>
      {/* tests look for /shopping cart/i, keep text exactly */}
      <h2>Shopping Cart</h2>

      <ul>
        {entries.map(([name, count]) => (
          <li key={name} style={{ marginBottom: "0.5rem" }}>
            {/* exact wording the tests scan for */}
            {`${name} is in your cart. (x${count})`}

            {/* only render delete button if a handler was provided */}
            {onDelete && (
              <button onClick={() => onDelete(name)} style={{ marginLeft: "1rem" }}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* simple total of counts */}
      <p>
        <strong>Total items:</strong>{" "}
        {entries.reduce((sum, [, c]) => sum + c, 0)}
      </p>
    </div>
  );
}
