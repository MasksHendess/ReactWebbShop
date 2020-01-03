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
        <Col sm-1 xs-2 md-1>
          <Row>
            <Col sm-3 col-xs-4 col-md-3>
              <HeaderLogo />
            </Col>
            <Col sm-3 col-xs-4 col-md-2>
              <HeaderSerchBar />
            </Col>
          </Row>
        </Col>
        <Col sm-3 col-xs-2 col-md-2></Col>
        <Col>
          <Row>
            <Col sm-3 col-xs-2 col-md-2>
              <HeaderDp />
            </Col>
            <Col sm-3 col-xs-2 col-md-2>
              <HeaderButton text="Home"/>
            </Col>
            <Col sm-3 col-xs-2 col-md-2>
              <HeaderButton text="Saved"/>
            </Col>
            <Col sm-3 col-xs-2 col-md-2>
              <HeaderButton text="MyCart"/>
            </Col>
          </Row>
        </Col>
      </Row>
    )

  };
}

