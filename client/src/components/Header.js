import React from 'react'
import {Navbar ,Container,Nav} from 'react-bootstrap';
function Header() {
    return (
        <Navbar bg="primary" expand="lg" variant='dark'>
  <Container>
    <Navbar.Brand href="#home">MOVIES APP</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    
      <Nav className="me-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#link">BROWSE</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header
