// ShoppingCart.jsx
import React from "react";

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems && cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
