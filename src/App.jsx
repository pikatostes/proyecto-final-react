// App.jsx
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
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
