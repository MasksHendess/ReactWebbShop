import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import HeaderComponent from './components/HeaderComponent.js';
import HeroComponent from './components/HeroComponent.js';
import Product from './components/Product.js';
import BigProduct from './components/BigProduct.js';
import BoringStuff from './components/BoringStuff.js';
import Footer from './components/Footer.js';


// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    
    <Container>
     <h1>F R E K Y F A S H I O N</h1>

<Row>
     <HeaderComponent />
</Row>
     <HeroComponent />
     <Row>
       <Col col-sm-1 col-xs-4 col-md-3 >
     <Product col-sm-1 col-xs-4 col-md-3 />
     </Col>
     
     <Col col-sm-1 col-xs-4 col-md-3 >
     <Product col-sm-1 col-xs-4 col-md-3 />
     </Col>
     
     <Col col-sm-1 col-xs-4 col-md-3 >
     <Product col-sm-1 col-xs-4 col-md-3 />
     </Col>
     </Row>
     <Row>
     <Col col-sm-1 col-xs-6 col-md-4 >
     <BigProduct />
     </Col>
     <Col col-sm-1 col-xs-6 col-md-4 >
     <BigProduct />
     </Col>
     </Row>
     <Row>
     <BoringStuff />
     </Row>
     <Row>
     <Footer />
     </Row>
     </Container>
  );
}

export default App;
