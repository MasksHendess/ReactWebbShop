import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HeroComponent(props)  {
  const product ={
     name: props.Name,
     price: props.Price,
     img: props.Img
   }
    return(
      
<Container>
<Card >
 <Card.Body>
 <Row>
 <Col col-sm-1 col-xs-1 col-md-1>
 <Card.Img variant="top" src={product.img} />
 </Col>
 <Col col-sm-1 col-xs-1 col-md-1>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      <p>
      Price {product.price}$
      </p>
    </Card.Text>
    <Button variant="primary">Buy</Button> 
    </Col>
 </Row>
  </Card.Body>
</Card>
</Container>
    )

}
