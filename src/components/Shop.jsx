// Shop.js
import React, { useState, useEffect } from "react";
import ShoppingCart from "./ShoppingCart"; // Make sure to provide the correct path

const Shop = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/item");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Buenos dias</h1>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ShoppingCart cartItems={cart} />
    </div>
  );
};

export default Shop;
