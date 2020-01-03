import React from 'react';
import './App.css';

// Components
import HeaderButton from './components/Header/HeaderButton.js';
import BottomMenu from './components/Menu/BottomMenu.js';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BottomMenuComponent() {

  return (
    <Container >
      <br />
      <Row>
        <Col col-sm-3 col-xs-1 col-md-2>
          <HeaderButton text="Shiping" />
        </Col>
        <Col col-sm-3 col-xs-1 col-md-2>
          <HeaderButton text="Donate"/>
        </Col>
        <Col col-sm-3 col-xs-1 col-md-2>
          <HeaderButton text="Stores"/>
        </Col>
        <Col col-sm-3 col-xs-1 col-md-2>
          <HeaderButton text="About"/>
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
    </Container>
  );
}

export default BottomMenuComponent;
