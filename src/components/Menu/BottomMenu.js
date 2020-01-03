import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Nav}  from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
export default function HeaderMenu() {

    return(
  <Nav defaultActiveKey="/" className="flex-column">
    <Nav.Link href="/">Shopping</Nav.Link>
    <Nav.Link eventKey="/">Link1</Nav.Link>
    <Nav.Link eventKey="/">Link2</Nav.Link>
    <Nav.Link eventKey="disabled" disabled> Disabled</Nav.Link>
  </Nav>
    )
}

