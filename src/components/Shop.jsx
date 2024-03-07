// Shop.jsx
import React, { useState, useEffect } from "react";
import ShoppingCart from "./ShoppingCart";
import Swal from "sweetalert2";
import "./Shop.css"; // Importa el archivo de estilos personalizados

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
        const response = await fetch("https://my-json-server.typicode.com/pikatostes/proyecto-final-react/item");
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
          window.location.href = "login";
        }
      });
      return;
    }

    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Item is already in the cart, update quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Item is not in the cart, add it with quantity 1
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="mb-4">Shop</h1>
          <div className="row">
            {items.map((item) => (
              <div key={item.id} className="col-md-4 col-6 mb-4">
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ maxHeight: "150px", objectFit: "contain" }}
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
        </div>
        <div className="col-md-6">
          {/* Asegúrate de pasar setCart correctamente */}
          <ShoppingCart cartItems={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
