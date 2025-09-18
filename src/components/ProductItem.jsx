import React from "react";

/**
 * One simple row for a product.
 * - Renders the name.
 * - "Add to Cart" button calls back up with the *name* of the product.
 * - data-testid="product-<id>" is required for the test to locate the button.
 */
export default function ProductItem({ id, name, onAddToCart }) {
  return (
    <div style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
      <span>{name}</span>

      {/* test hooks into this attribute to click the correct product */}
      <button
        data-testid={`product-${id}`}
        onClick={() => onAddToCart(name)}
      >
        Add to Cart
      </button>
    </div>
  );
}
