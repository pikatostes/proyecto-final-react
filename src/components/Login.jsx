import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/pikatostes/proyecto-final-react/user?username=${formData.username}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const users = await response.json();

        if (users.length > 0) {
          // User found, proceed with login
          const userData = users[0];

          // Store the user data in sessionStorage
          sessionStorage.setItem("user", JSON.stringify(userData));

          Swal.fire({
            title: "Success",
            text: "Inicio de sesión exitoso.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            // Redirect to the main page
            window.location.href = "../proyecto-final-react/";
          });
        } else {
          // No user found with the provided username
          console.error("Inicio de sesión fallido. Usuario no encontrado.");
          Swal.fire({
            title: "Error",
            text: "Inicio de sesión fallido. Usuario no encontrado.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } else {
        // Handle other HTTP status codes
        console.error(
          "Inicio de sesión fallido. Código de estado:",
          response.status
        );
        Swal.fire({
          title: "Error",
          text: "Inicio de sesión fallido. Código de estado: " + response.status,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error de red:", error);
      // Show an error message in case of network failure
      Swal.fire({
        title: "Error",
        text: "Error de red. Inténtalo nuevamente.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div>
        <h2>Iniciar Sesión</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
        <p className="mt-3">
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>.
        </p>
      </div>
    </Container>
  );
};

export default Login;
