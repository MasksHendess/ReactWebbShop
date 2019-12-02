import React from 'react';
import './App.css';

// Components
import HeaderDp from './components/Header/HeaderDp.js';
import HeaderButton from './components/Header/HeaderButton.js';
import HeaderSerchBar from './components/Header/HeaderSerchBar.js';
import HeaderLogo from './components/Header/HeaderLogo.js';
import HeroComponent from './components/HeroComponent.js';
import Product from './components/Product/Product.js';
import BigProduct from './components/Product/BigProduct.js';
import BottomMenu from './components/Menu/BottomMenu.js';
import Footer from './components/Footer.js';
import HeaderComponent from './components/Header/HeaderComponent';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  BrowserRouter
} from "react-router-dom";

// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Home extends React.Component{

      constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Price: 0,
      Img: "https://img.scryfall.com/cards/large/front/b/e/be5f45bb-de82-4e64-a9c3-e8bac5d4fa75.jpg?1561957068",
       
    };
  }
  render(){
  return (
    <Container>
    
    <HeaderComponent />
    <br/>
      <Row>
        <Col col-sm-10 col-xs-10 col-md-10>
          <HeroComponent />
        </Col>
      </Row>

      <br />
      <Row>
        <Col col-sm-1 col-xs-4 col-md-3>
          <Product Name="Product 1" Price="500" Img ="https://img.scryfall.com/cards/large/front/b/e/be5f45bb-de82-4e64-a9c3-e8bac5d4fa75.jpg?1561957068" />
        </Col>

        <Col col-sm-1 col-xs-4 col-md-3>
           <Product Name="Product 2" Price="400" Img ="https://img.scryfall.com/cards/large/front/b/e/be5f45bb-de82-4e64-a9c3-e8bac5d4fa75.jpg?1561957068" />
       
        </Col>

        <Col col-sm-1 col-xs-4 col-md-3>
           <Product Name="Product 3" Price="600" Img ="https://img.scryfall.com/cards/large/front/b/e/be5f45bb-de82-4e64-a9c3-e8bac5d4fa75.jpg?1561957068" />
       
        </Col>
      </Row>

      <br />
      <Row>
        <Col col-sm-1 col-xs-6 col-md-4>
          <BigProduct />
        </Col>
        <Col col-sm-1 col-xs-6 col-md-4>
          <BigProduct />
        </Col>
      </Row>

      <br />
      <Row>
        <Col col-sm-3 col-xs-1 col-md-2>
          <HeaderButton />
        </Col>
        <Col col-sm-3 col-xs-1 col-md-2>
          <HeaderButton />
        </Col>
        <Col col-sm-3 col-xs-1 col-md-2>
          <HeaderButton />
        </Col>
        <Col col-sm-3 col-xs-1 col-md-2>
          <HeaderButton />
        </Col>
      </Row>
      <br />
      <Row>
        <Col col-sm-3 col-xs-1 col-md-2>
          <BottomMenu />
        </Col>
        <Col col-sm-3 col-xs-1 col-md-2>
          <BottomMenu />
        </Col>
        <Col col-sm-3 col-xs-1 col-md-2>
          <BottomMenu />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
}

