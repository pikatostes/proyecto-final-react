// ShoppingCart.jsx
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const ShoppingCart = ({ cartItems, setCart }) => {
  const [localCartItems, setLocalCartItems] = useState(cartItems || []);

  useEffect(() => {
    setLocalCartItems(cartItems || []);
  }, [cartItems]);

  const removeFromCart = (index) => {
    const updatedCart = [...localCartItems];
    updatedCart.splice(index, 1);
    setLocalCartItems(updatedCart);
    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return localCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      {localCartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Item</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {localCartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => removeFromCart(index)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="2"></td>
              <td></td>
              <td>Total: ${calculateTotal()}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ShoppingCart;
