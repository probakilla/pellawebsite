import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import File from "../../releases/v0.0.1/test.so"

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
    return(
      <Container>
        <Row>
          <Col>
            <a href="test.so" download>Download test</a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReleaseLink;