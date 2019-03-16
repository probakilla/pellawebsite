import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import "../../css/links.css"

class ReleaseLink extends Component {
  static get propTypes() {
    return {
      version: PropTypes.string
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      version: props.version
    };
  }

  render() {
    const gameWindows = "releases/" + this.state.version + "/heroesandcreatures-" + this.state.version + ".zip";
    const gameLinux = "releases/" + this.state.version + "/heroesandcreatures-" + this.state.version + ".tar.gz";
    const gameLibraryWindows = "releases/" + this.state.version + "/heroesandcreatures-" + this.state.version + ".dll";
    const gameLibraryLinux = "releases/" + this.state.version + "/heroesandcreatures-" + this.state.version + ".so";
    return(
      <Container>
        <Row>
          <Col>
          <h4>Version {this.state.version}</h4>
            <h5>Jeu</h5>
            <a className="release-link" href={gameWindows}>Version Windows</a><br/>
            <a className="release-link" href={gameLinux}>Version Linux</a>
            <h5>Bibliothèques</h5>
            <a className="release-link" href={gameLibraryWindows}>Bibliothèque Windows (.dll)</a><br/>
            <a className="release-link" href={gameLibraryLinux}>Bibliothèque Linux (.so)</a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReleaseLink;