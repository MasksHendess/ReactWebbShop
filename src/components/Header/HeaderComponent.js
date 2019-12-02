import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderDp from './HeaderDp.js';
import HeaderButton from './HeaderButton.js';
import HeaderSerchBar from './HeaderSerchBar.js';
import HeaderLogo from './HeaderLogo.js';

export default class HeaderComponent extends React.Component  {
  render(){
    return(
   <Row>
        <Col col-sm-1 col-xs-2 col-md-1>
          <Row>
            <Col col-sm-3 col-xs-4 col-md-3>
              <HeaderLogo />
            </Col>
            <Col col-sm-3 col-xs-4 col-md-2>
              <HeaderSerchBar />
            </Col>
          </Row>
        </Col>
        <Col col-sm-3 col-xs-2 col-md-2></Col>
        <Col>
          <Row>
            <Col col-sm-3 col-xs-2 col-md-2>
              <HeaderDp />
            </Col>
            <Col col-sm-3 col-xs-2 col-md-2>
              <HeaderButton />
            </Col>
            <Col col-sm-3 col-xs-2 col-md-2>
              <HeaderButton />
            </Col>
            <Col col-sm-3 col-xs-2 col-md-2>
              <HeaderButton />
            </Col>
          </Row>
        </Col>
      </Row>
    )

  };
}

