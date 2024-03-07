import { useState } from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./components/Shop";
import Error from "./components/Error";

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
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
