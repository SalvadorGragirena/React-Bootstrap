import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from './CartWidget';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'grey'
};

const dropStyle = {
  textDecoration: "none",
  fontSize: 16,
  color: 'black',
}

const Menu = () => {
  return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" style={linkStyle}>Inicio</Link>
              <Link to="/Nosotros" style={linkStyle}>Nosotros</Link>
              <NavDropdown title="Dropdown" style={linkStyle} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link style={dropStyle} to="/"> Action </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link style={dropStyle} to="/"> Action 2</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link style={dropStyle} to="/"> Action 3</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>

  )
}

export default Menu;