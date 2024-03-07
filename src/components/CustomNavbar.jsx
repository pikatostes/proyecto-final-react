import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Register from "../components/Register";
import Error from "../components/Error";
import Login from "../components/Login";
import Shop from "./Shop";

const CustomNavbar = () => {
  // Check if a user is logged in
  const isLoggedIn = sessionStorage.getItem("user") !== null;

  const handleLogout = () => {
    // Clear user data from sessionStorage
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("cart");
    // Redirect to the main page after logout
    window.location.href = "/";
  };

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const username = userData ? userData.username : "";

  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="proyecto-final-react/">
            <img
              alt=""
              src="src/assets/borderlands-logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Borderlands Fansite
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="proyecto-final-react/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="proyecto-final-react/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="proyecto-final-react/shop">
                Shop
              </Nav.Link>
              {isLoggedIn ? (
                <NavDropdown title={`Hola ${username}`} id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Button variant="link" onClick={handleLogout}>
                      Logout
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link as={Link} to="proyecto-final-react/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="proyecto-final-react/register">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="proyecto-final-react/" element={<Home />} />
        <Route path="proyecto-final-react/about" element={<About />} />
        <Route path="proyecto-final-react/login" element={<Login />} />
        <Route path="proyecto-final-react/register" element={<Register />} />
        <Route path="proyecto-final-react/shop" element={<Shop />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default CustomNavbar;