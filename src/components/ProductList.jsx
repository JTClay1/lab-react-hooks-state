import React from "react";
import ProductItem from "./ProductItem";

/**
 * Source of truth for the static product list.
 * NOTE: Tests import this by name, so keep the named export and keep "Apple" singular.
 */
export const sampleProducts = [
  { id: 1, name: "Milk",   category: "Dairy"  },
  { id: 2, name: "Cheese", category: "Dairy"  },
  { id: 3, name: "Apple",  category: "Fruits" }, // singular on purpose (tests)
  { id: 4, name: "Bananas",category: "Fruits" },
];

/**
 * Filters and displays the products.
 * Props:
 *  - selectedCategory: "all" | "Fruits" | "Dairy"
 *  - onAddToCart(name): parent handler to add by name
 */
export default function ProductList({ selectedCategory = "all", onAddToCart }) {
  // compute which items should be visible given the selected category
  const visible =
    selectedCategory === "all"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory);

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0" }}>
      {/* if we have items, render them; else show the required empty-state string */}
      {visible.length ? (
        visible.map((p) => (
          <li key={p.id} style={{ marginBottom: "0.5rem" }}>
            <ProductItem id={p.id} name={p.name} onAddToCart={onAddToCart} />
          </li>
        ))
      ) : (
        <li>No products available.</li>
      )}
    </ul>
  );
}
