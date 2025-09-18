import React from "react";

export default function ProductItem({ id, name, onAddToCart }) {
  return (
    <div style={{ display: "inline-flex", gap: ".5rem", alignItems: "center" }}>
      <span>{name}</span>
      <button data-testid={`product-${id}`} onClick={() => onAddToCart(name)}>
        Add to Cart
      </button>
    </div>
  );
}
