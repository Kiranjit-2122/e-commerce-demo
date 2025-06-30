import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css'; // create this file next if not already

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-title">{item.title}</p>
                <p className="cart-price">₹{item.price}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total:</strong> ₹{total}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
