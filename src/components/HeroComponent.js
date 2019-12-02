import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function HeroComponent()  {
  
    return(
<Card style={{ width: '25rem' }}>
 <Card.Body>
    <Card.Title>Hero Product</Card.Title>
    <Card.Text>
      You should realy buy this cool product
      
    </Card.Text>
    <Button variant="primary">Buy</Button> 
    <Card.Img variant="top" src="https://img.scryfall.com/cards/large/front/0/2/029946b5-3d15-4a72-9d1a-bb36347a87a0.jpg?1562542588" />
  
  </Card.Body>
</Card>
    )

}
