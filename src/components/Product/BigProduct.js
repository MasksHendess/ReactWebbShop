import React from 'react';
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

export default function BigProduct(props)  {
     const product ={
     name: props.Name,
     price: props.Price,
     img: props.Img
   }

   function activate()
 {
   localStorage.clear()
   localStorage.setItem("name", product.name)
   localStorage.setItem("img", product.img)
   localStorage.setItem("price", product.price)
 }
    return(
      <Container>
<Card>
<Row>
<Col col-sm-1 col-xs-1 col-md-1>
  <Card.Img variant="top" src={product.img} />
  </Col>
  </Row>
  <Row>
  <Col col-sm-1 col-xs-1 col-md-1>
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      <p>
      Price:{product.price}$
      </p>
    </Card.Text>
    <Link to="/ProductPage" onClick={activate} className="btn btn-primary">View Product Details</Link>
  </Card.Body>
  </Col>
  </Row>
</Card>
</Container>
    )

}
