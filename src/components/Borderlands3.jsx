import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CharacterList = ({ characters }) => {
  return (
    <Container>
      <h2>Borderlands 3</h2>
      <p>
        Borderlands 3 continúa la exitosa serie de juegos de disparos en primera
        persona (FPS) con elementos de rol (RPG) desarrollada por Gearbox
        Software. Lanzado en 2019, Borderlands 3 presenta nuevos mundos,
        personajes y enemigos, manteniendo la esencia única que los fanáticos
        adoran. Con su humor característico y una jugabilidad mejorada,
        Borderlands 3 es una experiencia épica para los amantes de la acción
        cooperativa.
      </p>
      <img
        src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/09/20/39d6ef9d-ee74-4832-a0fd-54a0b77ee49b/borderlands-3-personajes-guia"
        alt="Borderlands 3"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h2>Personajes Jugables de Borderlands 3</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {characters.map((character) => (
          <Col key={character.id}>
            <Link to={`/characterinfo/${character.id}`}>
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

const Borderlands3 = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/pikatostes/proyecto-final-react/character");
        const data = await response.json();

        // Filtra los personajes que tienen el atributo game con valor "BL3"
        const bl3Characters = data.filter(
          (character) => character.game === "BL3"
        );

        setCharactersData(bl3Characters);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return <CharacterList characters={charactersData} />;
};

export default Borderlands3;
