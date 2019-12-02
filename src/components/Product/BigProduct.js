import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
 
export default function BigProduct()  {
  
    return(
<Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src="https://img.scryfall.com/cards/large/front/b/e/be5f45bb-de82-4e64-a9c3-e8bac5d4fa75.jpg?1561957068" />
  <Card.Body>
    <Card.Title>Cool Product</Card.Title>
    <Card.Text>
      You should realy buy this cool product
    </Card.Text>
    <Button variant="primary">Buy</Button>
  </Card.Body>
</Card>
    )

}
