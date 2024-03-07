import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
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
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="shop">
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
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
