import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../../css/releaseCard.css";

import ReleaseLink from "./releaseLinks";

class ReleaseCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="release-card-style">
              <Card.Body>
                <Card.Title>Liste des releases</Card.Title>
                <hr/>
                <ReleaseLink version="v0.0.1"/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default ReleaseCard;