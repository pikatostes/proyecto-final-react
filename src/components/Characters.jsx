import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import "./Characters.css"; // Importa el archivo de estilos personalizados

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("http://localhost:3001/character");
        const data = await response.json();
        setCharactersData(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  const renderCharacterCards = (game, characters) => (
    <CardGroup key={game} className="mt-4">
      <h3>{game}</h3>
      {characters.map((character) => (
        <Link to={`../proyecto-final-react/characterinfo/${character.id}`} key={character.id}>
          <Card style={{ maxWidth: "18rem" }}>
            <div className="ratio ratio-4x3">
              <Card.Img variant="top" src={character.image} alt={character.name} className="img-fluid" style={{ maxWidth: "100%" }} />
            </div>
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>{character.description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </CardGroup>
  );

  const uniqueGames = [...new Set(charactersData.map((character) => character.game))];

  return (
    <Container className="mt-5">
      <h2>Personajes Jugables de Borderlands</h2>
      {uniqueGames.map((game) => {
        const gameCharacters = charactersData.filter((character) => character.game === game);
        return renderCharacterCards(game, gameCharacters);
      })}
    </Container>
  );
};

export default Characters;
