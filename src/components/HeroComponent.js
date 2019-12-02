import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HeroComponent()  {
  
    return(
      
<Container>
<Card >
 <Card.Body>
 <Row>
 <Col col-sm-1 col-xs-1 col-md-1>
 <Card.Img variant="top" src="https://img.scryfall.com/cards/large/front/0/2/029946b5-3d15-4a72-9d1a-bb36347a87a0.jpg?1562542588" />
 </Col>
 <Col col-sm-1 col-xs-1 col-md-1>
    <Card.Title>Hero Product</Card.Title>
    <Card.Text>
      You should realy buy this cool product
      
    </Card.Text>
  </Col>
  <Col col-sm-1 col-xs-1 col-md-1>
    <Button variant="primary">Buy</Button> 
    </Col>
 </Row>
  </Card.Body>
</Card>
</Container>
    )

}
