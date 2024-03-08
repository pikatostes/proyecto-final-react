import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const CharacterInfo = () => {
  const { characterId } = useParams();
  const [characterInfo, setCharacterInfo] = useState(null);

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      try {
        const response = await fetch(`https://my-json-server.typicode.com/pikatostes/proyecto-final-react/character/${characterId}`);
        const data = await response.json();
        setCharacterInfo(data);
      } catch (error) {
        console.error("Error fetching character info:", error);
      }
    };

    fetchCharacterInfo();
  }, [characterId]);

  if (!characterInfo) {
    // Loading state or handle error
    return <div>Loading...</div>;
  }

  const containerStyle = {
    minHeight: "80vh",
    backgroundImage: `url(../${characterInfo.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Container className="mt-4" style={containerStyle}>
      <Card className="d-flex flex-row" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
        <div>
          <Card.Img
            src={`../${characterInfo.image}`}
            alt={characterInfo.name}
            className="img-fluid"
            style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "cover" }}
          />
        </div>
        <Card.Body className="d-flex flex-column justify-content-center align-items-start">
          <Card.Title>{characterInfo.name} Information</Card.Title>
          <Card.Text>{characterInfo.description}</Card.Text>

          <div className="text-center mt-3">
            <h5>Skills</h5>
            <img
              src={`../${characterInfo.skilltree}`}
              alt={`${characterInfo.name} Skill Tree`}
              style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "cover" }}
            />
          </div>

          {/* Nueva sección para mostrar las habilidades */}
          <div className="mt-3">
            <h5>Character Skills</h5>
            <p>{characterInfo.skills}</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CharacterInfo;
