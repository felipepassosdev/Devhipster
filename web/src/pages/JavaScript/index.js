import React from 'react';
import { Container, Row, Col, ResponsiveEmbed, Card } from 'react-bootstrap';

function JavaScript() {
  return (
    <Container>
      <div className="p-5"></div>
      <Row>
        <Col md='9'>
          <ResponsiveEmbed
            aspectRatio='16by9'
          >
            <iframe src="https://www.youtube.com/embed/iVmYaIZ5Hmk" title="JS" allowfullscreen></iframe>
          </ResponsiveEmbed>
        </Col>
        <Col md='3'>
          <Card text='dark'>
            <Card.Body>
              <h5>Curso Javascript</h5>
              <ul>
                <li>Apresentação</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default JavaScript;
