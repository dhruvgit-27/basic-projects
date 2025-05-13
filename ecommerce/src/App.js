import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout! (Feature can be expanded)");
    setCart([]); // Clearing cart after checkout
  };

  return (
    <div className="app-container">
      <h1>🛒 My E-Commerce Store</h1>
      <div className="main-content">
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} totalAmount={getTotalAmount()} onCheckout={handleCheckout} />
      </div>
    </div>
  );
};

export default App;
