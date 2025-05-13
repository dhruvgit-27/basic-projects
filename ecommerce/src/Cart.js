import React from "react";

const Cart = ({ cart, removeFromCart, totalAmount, onCheckout }) => {
  return (
    <div className="cart">
      <h2>🛍️ Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                {item.name} - ₹{item.price}
                <button className="remove-btn" onClick={() => removeFromCart(index)}>❌</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalAmount}</h3>
          <button className="checkout-btn" onClick={onCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
