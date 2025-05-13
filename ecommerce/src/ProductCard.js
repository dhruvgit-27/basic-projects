import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button className="buy-btn" onClick={() => addToCart(product)}>🛒 Buy Now</button>
    </div>
  );
};

export default ProductCard;
