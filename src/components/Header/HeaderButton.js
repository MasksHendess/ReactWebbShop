import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
export default function HeaderButton (props)  {
 
    return(
  <Button variant="primary">{props.text}</Button>
    )

}

