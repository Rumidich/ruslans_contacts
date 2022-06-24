import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="warning" variant="warning" animation="glow">
      <Container>
        <Navbar.Brand>Ruslan's Contacts Book</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/add">
            <Nav.Item>Add Contact</Nav.Item>
          </Link>
          <Link to="/list">
            <Nav.Item>Contacts List</Nav.Item>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
