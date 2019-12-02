import React from 'react';
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

export default function FeaturedProductComponent()  {
  
    return(
      
<Container>
<Card >
 <Card.Body>
 <Row>
 <Col col-sm-1 col-xs-1 col-md-1>
 <Card.Img variant="top" src="https://img.scryfall.com/cards/large/front/0/2/029946b5-3d15-4a72-9d1a-bb36347a87a0.jpg?1562542588" />
 </Col>
 <Col col-sm-1 col-xs-1 col-md-1>
    <Card.Title>Product Name</Card.Title>
    <Card.Text>
     
  Product Information much lorem very ipsum jane doe at nomail com
  Product Information much lorem very ipsum jane doe at nomail com
  Product Information much lorem very ipsum jane doe at nomail com
  Product Information much lorem very ipsum jane doe at nomail com
  Product Information much lorem very ipsum jane doe at nomail com

  PRICE: 500
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
