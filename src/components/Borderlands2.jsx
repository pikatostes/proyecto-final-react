import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CharacterList = ({ characters }) => {
  return (
    <Container>
      <h2>Borderlands 2</h2>
      <p>
        Borderlands 2 es la secuela del exitoso juego de disparos en primera
        persona (FPS) con elementos de rol (RPG) desarrollado por Gearbox
        Software. Lanzado en 2012, Borderlands 2 expande la historia y la
        jugabilidad del original, introduciendo nuevos personajes, entornos y
        enemigos. Con su estilo visual distintivo y su enfoque en el juego
        cooperativo, Borderlands 2 sigue siendo un favorito entre los fanáticos
        del género.
      </p>
      <img
        src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fborderlands-2%2Fhome%2FEGS_Borderlands2_GearboxSoftware_S5-1360x766-8546dab7d7968b51fae34f402d61c1f9ea1b6891.jpg"
        alt="Borderlands 2"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h2>Personajes Jugables de Borderlands 2</h2>
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

const Borderlands2 = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("http://localhost:3001/character");
        const data = await response.json();

        // Filtra los personajes que tienen el atributo game con valor "BL2"
        const bl2Characters = data.filter(
          (character) => character.game === "BL2"
        );

        setCharactersData(bl2Characters);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return <CharacterList characters={charactersData} />;
};

export default Borderlands2;
