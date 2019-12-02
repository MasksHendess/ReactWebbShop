import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Nav}  from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
export default function HeaderMenu() {

    return(
  <Nav defaultActiveKey="/home" className="flex-column">
    <Nav.Link href="/home">Shopping</Nav.Link>
    <Nav.Link eventKey="/home">Link1</Nav.Link>
    <Nav.Link eventKey="/home">Link2</Nav.Link>
    <Nav.Link eventKey="disabled" disabled> Disabled</Nav.Link>
  </Nav>
    )
}

