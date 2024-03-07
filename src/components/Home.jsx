// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import borderlandsImage from "../assets/borderlands.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Home.css"; // Importa el archivo de estilos personalizados

const Home = () => {
  const isLoggedIn = sessionStorage.getItem("user") !== null;

  return (
    <Container className="text-center mt-5 borderlands-theme">
      <h2 className="mb-4">Bienvenido a la Saga Borderlands</h2>
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <img
            src={borderlandsImage}
            alt="Borderlands"
            className="img-fluid rounded borderlands-image"
          />
        </Col>
        <Col md={6} className="borderlands-text">
          <p className="mt-4">
            ¡Explora el emocionante mundo de Borderlands lleno de acción y caos!
            Descubre personajes únicos, obtén armas asombrosas y enfréntate a
            enemigos desafiantes en este juego de disparos en primera persona.
          </p>
          <p>
            {isLoggedIn ? (
              // Si hay sesión iniciada, muestra el enlace a Shop
              <Link to="shop">
                <Button variant="primary borderlands-button">Ir a Shop</Button>
              </Link>
            ) : (
              // Si no hay sesión iniciada, muestra el enlace para crear cuenta
              <Link to="register">
                <Button variant="primary borderlands-button">
                  Crea tu cuenta
                </Button>
              </Link>
            )}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

