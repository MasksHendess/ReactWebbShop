import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import {Form} from 'react-bootstrap';

import {Button} from 'react-bootstrap';

export default class HeaderSerchBar extends React.Component  {
  render(){
    return(
<Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    )
  };
}

