// Shop.js
import React, { useState, useEffect } from "react";
import ShoppingCart from "./ShoppingCart"; // Make sure to provide the correct path
import Swal from "sweetalert2";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(() => {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const username = userData ? userData.username : "";

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
    const userData = JSON.parse(sessionStorage.getItem("user"));

    if (!userData) {
      // User is not logged in, show SweetAlert alert
      Swal.fire({
        title: "Iniciar Sesión",
        text: "Debes iniciar sesión para añadir productos al carrito.",
        icon: "info",
        confirmButtonText: "Iniciar Sesión",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to login page when "OK" is clicked
          window.location.href = "/proyecto-final-react/login";
        }
      });
      return;
    }

    // Update the local state
    setCart((prevCart) => [...prevCart, item]);

    // Update the session storage
    const updatedCart = [...cart, item];
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Buenos {username}</h1>
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
