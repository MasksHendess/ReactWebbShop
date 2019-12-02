import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from 'react-bootstrap/Navbar'
import {Nav}  from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';

import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ProductPage from './ProductPage.js';
import Home from './Home.js';

const routing = (
  <Router>

  <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/link-666">Products</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">News</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Categories</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Best Sellers</Nav.Link>
  </Nav.Item>
   <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Sales</Nav.Link>
  </Nav.Item>
   <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Campains</Nav.Link>
  </Nav.Item>
   <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Brands</Nav.Link>
  </Nav.Item>
   <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Cart</Nav.Link>
  </Nav.Item>
</Nav>
      <Route exact path="/" component={Home} />
      <Route path="/ProductPage" component={ProductPage} />
    
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
