import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Icon from "../resources/pella.jpg";

import "../../css/navbar.css";

class PellaNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar className="pella-navbar" fixed="top">
        <Navbar.Brand href="index.html">
          <img
            src={Icon}
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
          <Nav>
            <Nav.Link href="releases.html">Heroes and Creatures</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default PellaNavbar;