import React, { Component } from "react";
import "../../css/image.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Icon from "../resources/pella_logo.png";

class PellaImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Container className="pella-img">
        <Row>
          <Col>
            <Image className="text-center" src={Icon} rounded fluid />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PellaImage;