import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import FeaturedProductComponent from './FeaturedProductComponent';

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

  /*return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(name)}>
        Click me
      </button>
    </div>
  );*/
 function activate()
 {
   localStorage.clear()
   localStorage.setItem("name", product.name)
   localStorage.setItem("img", product.img)
   localStorage.setItem("price", product.price)
   window.location.reload();
 }
  return(
<Container>
<Card >
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

//<FeaturedProductComponent Name = {product.name} Img={product.img} Price={product.price}/>
  
