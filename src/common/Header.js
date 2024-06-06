import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../style.scss";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="navtext" href="/">
            BookMyShow
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navtext" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="navtext" href="#link">
                Link
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item className="navdropdown" href="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown" href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
