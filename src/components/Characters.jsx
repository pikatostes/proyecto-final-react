import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Characters.css"; // Importa el archivo de estilos personalizados

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/pikatostes/proyecto-final-react/character"
        );
        const data = await response.json();
        setCharactersData(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  const renderCharacterCards = (game, characters) => (
    <div key={game} className="mt-4">
      <h3>{game}</h3>
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
    </div>
  );

  const uniqueGames = [
    ...new Set(charactersData.map((character) => character.game)),
  ];

  return (
    <Container className="mt-5">
      <h2>Personajes Jugables de Borderlands</h2>
      {uniqueGames.map((game) => {
        const gameCharacters = charactersData.filter(
          (character) => character.game === game
        );
        return renderCharacterCards(game, gameCharacters);
      })}
    </Container>
  );
};

export default Characters;
