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
import BottomMenuComponent from './BottomMenuComponent.js';


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
    <br />
      <Row>
        <Col col-sm-10 col-xs-10 col-md-10>
          <HeroComponent Name="Coolest Product" Price="350" Img ="https://img.scryfall.com/cards/large/front/c/3/c3ed9cd3-5e6a-4e86-b120-ff27b744311d.jpg?1562875268" />
        </Col>
      </Row>

      <br />
      <Row>
        <Col col-sm-1 col-xs-4 col-md-3>
          <Product Name="Product 1" Price="500" Img ="https://img.scryfall.com/cards/large/front/b/e/be5f45bb-de82-4e64-a9c3-e8bac5d4fa75.jpg?1561957068" />
        </Col>

        <Col col-sm-1 col-xs-4 col-md-3>
           <Product Name="Product 2" Price="400" Img ="https://img.scryfall.com/cards/large/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1562933099" />
       
        </Col>

        <Col col-sm-1 col-xs-4 col-md-3>
           <Product Name="Product 3" Price="600" Img ="https://img.scryfall.com/cards/large/front/5/d/5d10b752-d9cb-419d-a5c4-d4ee1acb655e.jpg?1562736365" />
       
        </Col>
      </Row>

      <br />
      <Row>
        <Col col-sm-1 col-xs-6 col-md-4>
          <BigProduct Name="BigProduct 1" Price="1000" Img="https://img.scryfall.com/cards/large/front/8/7/87da5ad8-b35f-4f9c-b17a-bb2563cbc186.jpg?1562170624" />
        </Col>
        <Col col-sm-1 col-xs-6 col-md-4>
          <BigProduct Name ="BigProduct 2" Price="5000" Img="https://img.scryfall.com/cards/large/front/2/8/28a1f83c-a9ef-463e-97b5-2ca3b7232f82.jpg?1562827264" />
        </Col>
      </Row>

     <BottomMenuComponent />
        <Footer />
    </Container>
  );
}
}

