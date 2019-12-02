import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FeaturedProductDp from './FeaturedProductDp';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function FeaturedProductRadio()  {
  
    return(
      

    <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
            White
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            Not White
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            Black
          </label>
        </div>
      </form>
    )

}
