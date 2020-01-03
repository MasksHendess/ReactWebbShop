import React, { Component, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FeaturedProductDp from './FeaturedProductDp';
import FeaturedProductRadio from './FeaturedProductRadio';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default class FeaturedProductComponent extends Component  {



  constructor(props) {
    super(props);
    this.state = { name: '' ,
      img:'',
      price: ''
    };
   // this.incrementCounter = this.incrementCounter.bind(this);
  }
   
 /*fetchMyAPI() {
      let product = localStorage.getItem('product')
 console.log(product)
   this.setState({product: product
});
    }*/
  componentDidMount() {
       let Name = localStorage.getItem('name')
       let Price = localStorage.getItem('price')
       let Img = localStorage.getItem('img')
 console.log(Name)
   this.setState({name: Name,
   price: Price,
   img: Img
});
        };
   render() {
    return(
      
<Container>
<Card >
 <Card.Body>
 <Row>
 <Col col-sm-1 col-xs-1 col-md-1>
 <Card.Img variant="top" src={this.state.img} />
 </Col>
 <Col col-sm-1 col-xs-1 col-md-1>
<Card.Title> {this.state.name}</Card.Title>
    <Card.Text>
     <b>Product Information</b><br/>
  Product Information much lorem very ipsum jane doe at nomail com
  Product Information much lorem very ipsum jane doe at nomail com
  Product Information much lorem very ipsum jane doe at nomail com
  Product Information much lorem very ipsum jane doe at nomail com
  Product Information much lorem very ipsum jane doe at nomail com

  <p>
  <b>
  Product Price: {this.state.price} $
  </b>
  </p>
    </Card.Text>
    <FeaturedProductRadio />
  <FeaturedProductDp />
    <Button variant="primary">Buy</Button> 
    <Button variant="primary">Save</Button> 
    </Col>
 </Row>
  </Card.Body>
</Card>
</Container>
    )
   }
}
