import React, { useState } from "react";
import Borderlands1 from "./Borderlands1";
import Borderlands2 from "./Borderlands2";
import Borderlands3 from "./Borderlands3"; // Importa Borderlands3

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const renderSelectedGame = () => {
    switch (selectedGame) {
      case "borderlands1":
        return <Borderlands1 />;
      case "borderlands2":
        return <Borderlands2 />;
      case "borderlands3": // Añade el caso para Borderlands 3
        return <Borderlands3 />;
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="mb-4">Borderlands Games</h1>
          <nav>
            <ul className="">
              <li className="list-group-item">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setSelectedGame("borderlands1")}
                >
                  Borderlands 1
                </button>
              </li>
              <br />
              <li className="list-group-item">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setSelectedGame("borderlands2")}
                >
                  Borderlands 2
                </button>
              </li>
              <br />
              <li className="list-group-item">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setSelectedGame("borderlands3")}
                >
                  Borderlands 3
                </button>
              </li>
              {/* Puedes agregar más botones según sea necesario */}
            </ul>
          </nav>
        </div>
        <div className="col-md-6">
          {renderSelectedGame()}
        </div>
      </div>
    </div>
  );
};

export default Games;
