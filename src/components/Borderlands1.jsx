import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CharacterList = ({ characters }) => {
  return (
    <Container>
      <h2>Borderlands 1</h2>
      <p>
        Borderlands es un juego de disparos en primera persona (FPS) con
        elementos de rol (RPG) desarrollado por Gearbox Software. Fue lanzado en
        2009 y se ha convertido en un clásico de la acción cooperativa.
        Ambientado en el planeta Pandora, Borderlands ofrece una experiencia
        única con su estilo visual distintivo y su enfoque en la cooperación
        multijugador.
      </p>
      <img
        src="https://m.media-amazon.com/images/I/816X4KZZZ1L.jpg"
        alt="Borderlands 1"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h2>Personajes Jugables de Borderlands</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {characters.map((character) => (
          <Col key={character.id}>
            <Link to={`../proyecto-final-react/characterinfo/${character.id}`}>
              <Card>
                <div className="ratio ratio-4x3">
                  <Card.Img
                    variant="top"
                    src={character.image}
                    alt={character.name}
                    className="img-fluid"
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{ textDecoration: "none" }}>
                    {character.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Borderlands1 = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/pikatostes/proyecto-final-react/character");
        const data = await response.json();

        // Filtra los personajes que tienen el atributo game con valor "BL1"
        const bl1Characters = data.filter(
          (character) => character.game === "BL1"
        );

        setCharactersData(bl1Characters);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return <CharacterList characters={charactersData} />;
};

export default Borderlands1;
