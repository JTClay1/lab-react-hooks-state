import React from 'react';
import styles from '../styles/ProductCard.module.css';

// single product card styling comes from CSS module
const ProductCard = ({ product }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* need to hook this up to the real add to cart handler later */}
      <button data-testid={'product-' + product.id}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;