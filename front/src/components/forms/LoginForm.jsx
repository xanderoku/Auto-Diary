import React from "react";
import axios from "axios";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import { useInput } from "./hooks/input-hook";

export default function RegForm(props) {
  const {
    value: email,
    bind: bindEmail,
    reset: resetEmail
  } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`/login`, { email, password})
      .then(res => {
        if (res.status === 200) {
          console.log('log form: ', res);
          props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });
    resetEmail();
    resetPassword();
  };

  return (
    <form style={{ marginTop: "20px", width: "25%" }}>
      <h3 style={{ color: "white" }}>Login:</h3>
      <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input type="email" placeholder="email" {...bindEmail} />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">%</InputGroupAddon>
        <Input type="password" placeholder="password" {...bindPassword} />
      </InputGroup>
      <Button
        onClick={handleSubmit}
        block
        style={{
          marginTop: "5px",
          backgroundColor: "#e50914",
          borderColor: "#e50914"
        }}
      >
        OK
      </Button>
    </form>
  );
}