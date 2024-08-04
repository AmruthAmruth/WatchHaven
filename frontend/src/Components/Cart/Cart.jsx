// src/components/ShoppingCart.js

import React, { useState } from 'react';
import './Cart.css';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Classic Watch', price: 99.99, quantity: 1 },
    { id: 2, name: 'Modern Watch', price: 149.99, quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-main">
      <Navbar/>
      <div className="shop-main">
    <div className="shopping-cart">
    <h2>Your Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src="https://www.rschrono.com/cdn/shop/files/RS-Chrono-Petronas-63S-Blue-Metal-Strap-Front.webp?v=1706786890&width=800" alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="item-quantity">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <button className="remove-item" onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    )}
    <div className="total">
      <h3>Total: ${totalPrice}</h3>
    </div>
    <button className="checkout-button">Proceed to Checkout</button>
  </div>
  </div>
  </div>
  );
};

export default Cart;
