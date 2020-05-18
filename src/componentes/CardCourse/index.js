import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Card, Button, Image } from 'react-bootstrap';

function CardCourse({ title, description, icon, url }) {

  const history = useHistory();

  function handleClick() {
    history.push(url);
  }

  return (
    <Col md='4' style={{ padding: '15px' }} >
      <Card text='dark'>
        <Card.Body>
          <Card.Title>
            <h3>{title}</h3>
          </Card.Title>
          <Image fluid={true} src={icon} />
          <h5>{description}</h5>
          <Button
            onClick={handleClick}
            variant='dark'
          >
            <h5 style={{ margin: 0 }} >EM BREVE</h5>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardCourse;
