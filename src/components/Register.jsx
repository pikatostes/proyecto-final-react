import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";
import "./Register.css"; // Importa el archivo de estilos personalizados
import { Link } from "react-router-dom";

const Register = () => {
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
      // Verificar si ya existe un usuario con el mismo nombre
      const checkUserResponse = await fetch(
        `https://my-json-server.typicode.com/pikatostes/proyecto-final-react/user?username=${formData.username}`
      );
      const existingUser = await checkUserResponse.json();

      if (existingUser.length > 0) {
        // Usuario con el mismo nombre ya existe
        console.log("Ya existe un usuario con ese nombre.");
        Swal.fire({
          title: "Error",
          text: "Ya existe un usuario con ese nombre.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        // No existe un usuario con el mismo nombre, realizar el registro
        const registerResponse = await fetch("https://my-json-server.typicode.com/pikatostes/proyecto-final-react/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (registerResponse.ok) {
          console.log("Usuario registrado exitosamente.");
          Swal.fire({
            title: "Success",
            text: "Usuario registrado exitosamente.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            // Redirigir a la página principal
            window.location.href = "login";
          });
        } else {
          Swal.fire({
            title: "Success",
            text: "Usuario no resgistrado debido a que la base de datos es inalterable.",
            icon: "success",
            confirmButtonText: "OK",
          })
          console.error("Error al registrar usuario.");
        }
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div>
        <h2>Alta de Usuario</h2>
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
            Registrarse
          </Button>
        </Form>
        <p className="mt-3">
          ¿Ya tienes cuenta? <Link to="../proyecto-final-react/login">Inicia sesión aquí</Link>.
        </p>
      </div>
    </Container>
  );
};

export default Register;
