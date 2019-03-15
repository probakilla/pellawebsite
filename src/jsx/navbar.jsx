import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "../../css/navbar.css";

class PellaNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar className="pella-navbar">
        <Navbar.Brand className="navbar-txt" href="#home">
          <img
            src="../../../resources/pella.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Pella Studio"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link className="navbar-txt">Pella Studio</Nav.Link>
          </Nav>
        </Navbar.Collapse>


      </Navbar>
    );
  }
}

export default PellaNavbar;