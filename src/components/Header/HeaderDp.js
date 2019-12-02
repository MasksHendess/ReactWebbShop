import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
export default class HeaderDp extends React.Component  {
  render(){
    return(
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Language
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item>English</Dropdown.Item>
    <Dropdown.Item>Svenska</Dropdown.Item>
    <Dropdown.Item>Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    )

  };
}

