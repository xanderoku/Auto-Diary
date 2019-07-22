import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const LoginForm = (props) => {
  return (
    <div style={{marginTop: '20px', width: '25%'}}>
        <h3 style={{color: 'white'}}>Login:</h3>
      <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input type="email" placeholder="email" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">#</InputGroupAddon>
        <Input placeholder="password" />
      </InputGroup>
      
    </div>
  );
};

export default LoginForm;