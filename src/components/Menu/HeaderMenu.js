import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Nav}  from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
export default function HeaderMenu() {

  return(
   <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">News</Nav.Link>
            <Nav.Link href="#Categories">Categories</Nav.Link>
            <Nav.Link href="#FeaturedProducts">Best Selling Products</Nav.Link>
            <Nav.Link href="#ProductsOnSale">Sales</Nav.Link>
            <Nav.Link href="#Campaigns">Campaigns</Nav.Link>
            <Nav.Link href="#Brands">Brands</Nav.Link>
          </Nav>
    
        </Navbar.Collapse>
      </Navbar>
    )
}

