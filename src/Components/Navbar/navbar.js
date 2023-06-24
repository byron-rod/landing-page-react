import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand className="mx-auto px-4">Start Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/" className="ml-2">Home</Nav.Link>
          <Nav.Link href="/about" className="ml-2">About</Nav.Link>
          <Nav.Link href="/services" className="ml-2">Services</Nav.Link>
          <Nav.Link href="/contact" className="ml-2">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
