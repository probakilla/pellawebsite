import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../../css/releaseCard.css";

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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default ReleaseCard;