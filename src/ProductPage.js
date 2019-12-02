import React from 'react';
import './App.css';

// Components
import HeaderDp from './components/Header/HeaderDp.js';
import HeaderButton from './components/Header/HeaderButton.js';
import HeaderSerchBar from './components/Header/HeaderSerchBar.js';
import Product from './components/Product/Product.js';
import BigProduct from './components/Product/BigProduct.js';
import BottomMenu from './components/Menu/BottomMenu.js';
import Footer from './components/Footer.js';
import HeaderComponent from './components/Header/HeaderComponent';
import FeaturedProductComponent from './components/Product/FeaturedProductComponent'

// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductPage() {

  return (
    <Container>
      <HeaderComponent />
      <br />

      <Row>
        <FeaturedProductComponent/>
      </Row>
      <br />
      <Row>
      <h2>
      Recomended Produtcs
      </h2>
      </Row>
      <Row>
        <Col col-sm-3 col-xs-1 col-md-2>
          <Product />
        </Col>

        <Col col-sm-3 col-xs-1 col-md-2>
          <Product />
        </Col>

        <Col col-sm-3 col-xs-1 col-md-2>
          <Product />
        </Col>

        <Col col-sm-3 col-xs-1 col-md-2>
          <Product />
        </Col>

        <Col col-sm-3 col-xs-1 col-md-2>
          <Product />
        </Col>

        <Col col-sm-3 col-xs-1 col-md-2>
          <Product />
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

export default ProductPage;
