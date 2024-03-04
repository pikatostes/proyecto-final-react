import React from "react";
import { Link } from "react-router-dom";
import borderlandsImage from "../assets/borderlands.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <h2 className="mb-4">Bienvenido a la Saga Borderlands</h2>
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <img
            src={borderlandsImage}
            alt="Borderlands"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <p className="mt-4">
            ¡Explora el emocionante mundo de Borderlands lleno de acción y caos!
            Descubre personajes únicos, obtén armas asombrosas y enfréntate a
            enemigos desafiantes en este juego de disparos en primera persona.
          </p>
          <p>
            ¿Listo para la aventura?{" "}
            <Link to="/register">
              <Button variant="primary">Crea tu cuenta</Button>
            </Link>
            y únete a la diversión.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
