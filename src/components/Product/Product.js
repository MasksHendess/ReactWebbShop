import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  BrowserRouter
} from "react-router-dom";

export default function Product(props) {
   const product ={
     name: props.Name,
     price: props.Price,
     img: props.Img
   }
console.log(product);
  const [count, setCount] = useState(0);

  /*return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(name)}>
        Click me
      </button>
    </div>
  );*/
  return(
<Container>
<Card >
<Row>
<Col col-sm-1 col-xs-1 col-md-1>
  <Card.Img variant="top" src="https://img.scryfall.com/cards/large/front/b/e/be5f45bb-de82-4e64-a9c3-e8bac5d4fa75.jpg?1561957068" />
  </Col>
  </Row>
  <Row>
  <Col col-sm-1 col-xs-1 col-md-1>
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      You should realy buy this cool product
    </Card.Text>
    <Button>Buy</Button>
  </Card.Body>
  </Col>
  </Row>
</Card>
</Container>
    )

}
