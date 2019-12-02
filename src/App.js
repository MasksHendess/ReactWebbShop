import React from 'react';
import './App.css';

// Components
import HeaderDp from './components/Header/HeaderDp.js';
import HeaderButton from './components/Header/HeaderButton.js';
import HeaderSerchBar from './components/Header/HeaderSerchBar.js';
import HeaderLogo from './components/Header/HeaderLogo.js';
import HeaderMenu from './components/Menu/HeaderMenu.js';
import HeroComponent from './components/HeroComponent.js';
import Product from './components/Product/Product.js';
import BigProduct from './components/Product/BigProduct.js';
import BottomMenu from './components/Menu/BottomMenu.js';
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
<Col col-sm-1 col-xs-1 col-md-1>
     <HeaderLogo/>
     </Col>
    <Col col-sm-3 col-xs-1 col-md-2>
     <HeaderSerchBar />
     </Col>
    <Col col-sm-3 col-xs-1 col-md-2>
     <HeaderDp />
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
<Row>
  <Col>
  <HeaderMenu/>
  </Col>
</Row>
<Row>
     <HeroComponent />
</Row>
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

export default App;
