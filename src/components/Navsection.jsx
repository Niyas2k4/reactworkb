import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>

            <NavDropdown title="Gallery" id="gallery-dropdown" menuVariant="dark">
              <NavDropdown.Item href="/Gallery">Nature</NavDropdown.Item>
              <NavDropdown.Item href="/Gallery">People</NavDropdown.Item>
              <NavDropdown.Item href="/Gallery">Architecture</NavDropdown.Item>
              <NavDropdown.Item href="/Gallery">Animals</NavDropdown.Item>
              <NavDropdown.Item href="/Gallery">Sports</NavDropdown.Item>
              <NavDropdown.Item href="/Gallery">Travel</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown title="Deep Dropdown" drop="end" id="deep-dropdown" menuVariant="dark">
                <NavDropdown.Item href="#deep1">Dropdown 1</NavDropdown.Item>
                <NavDropdown.Item href="#deep2">Dropdown 2</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            <Nav.Link href="/Service">Services</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>

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
