import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function FeaturedProductDp()  {
  
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Size
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Small</Dropdown.Item>
          <Dropdown.Item>Medium</Dropdown.Item>
          <Dropdown.Item>Big</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );

}
