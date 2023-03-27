import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap"
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
        //Aquí uso el componente Navbar de Bootstrap modificado.
    <Navbar className='barra justify-content-around' collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">LUCIANI AUTOMOVILES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto barrita">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/products">Galería</Nav.Link>            
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;