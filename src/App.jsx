import React, { useState } from "react";
import CustomNavbar from "./components/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./components/Shop";
import Error from "./components/Error";
import Characters from "./components/Characters";
import CharacterInfo from "./components/CharacterInfo";
import Games from "./components/Games";
import Borderlands1 from "./components/Borderlands1"; // Importa el componente Borderlands1
import Borderlands2 from "./components/Borderlands2"; // Importa el componente Borderlands2
import "./App.css"; // Importa el archivo de estilos personalizados

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="proyecto-final-react/" element={<Home />} />
        <Route path="proyecto-final-react/about" element={<About />} />
        <Route path="proyecto-final-react/login" element={<Login />} />
        <Route path="proyecto-final-react/register" element={<Register />} />
        <Route path="proyecto-final-react/shop" element={<Shop />} />
        <Route path="proyecto-final-react/characters" element={<Characters />} />
        <Route path="proyecto-final-react/characterinfo/:characterId" element={<CharacterInfo />} />
        <Route path="proyecto-final-react/games" element={<Games />} />
        <Route path="proyecto-final-react/games/borderlands1" element={<Borderlands1 />} /> {/* Nueva ruta para Borderlands1 */}
        <Route path="proyecto-final-react/games/borderlands2" element={<Borderlands2 />} /> {/* Nueva ruta para Borderlands2 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
