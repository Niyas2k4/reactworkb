import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";
// import "./NavSection.css"; // optional small css

function NavSection() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3 navshadow" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center brandlogo">
          <i className="bi bi-camera me-2 text-success"></i>
          <span className="fw-semibold fs-4">PhotoFolio</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
  <Nav.Link as={Link} to="/">Home</Nav.Link>
  <Nav.Link as={Link} to="/About">About</Nav.Link>
  
  <NavDropdown title="Gallery" id="gallery-dropdown" menuVariant="dark">
    <NavDropdown.Item as={Link} to="/Gallery">Nature</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/Gallery">People</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/Gallery">Architecture</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/Gallery">Animals</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/Gallery">Sports</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/Gallery">Travel</NavDropdown.Item>
  </NavDropdown>
  
  <Nav.Link as={Link} to="/Service">Services</Nav.Link>
  <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            {/* Social Icons */}
            <div className="d-flex ms-lg-3 socials">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSection;
