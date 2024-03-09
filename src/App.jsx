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
    <BrowserRouter basename="/proyecto-final-react">
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characterinfo/:characterId" element={<CharacterInfo />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/borderlands1" element={<Borderlands1 />} />
        <Route path="/games/borderlands2" element={<Borderlands2 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
