import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "💻 Laptop", price: 50000 },
  { id: 2, name: "📱 Smartphone", price: 30000 },
  { id: 3, name: "🎧 Headphones", price: 5000 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
