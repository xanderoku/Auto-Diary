import React from "react";
import axios from "axios";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import { useInput } from "./hooks/input-hook";

export default function NameForm(props) {
  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName
  } = useInput("");
  const {
    value: lastName,
    bind: bindLastName,
    reset: resetLastName
  } = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("testform: ", firstName, lastName);
    //
    axios
      .post(`/signup`, { email: firstName, password: lastName })
      .then(res => {
        console.log(res);
      });
    resetFirstName();
    resetLastName();
  };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //     <h3>Sign up:</h3>
  //       <label>
  //         Email:
  //         <input type="text" {...bindFirstName} />
  //       </label>
  //       <label>
  //         Password:
  //         <input type="text" {...bindLastName} />
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>
  //   );
  // }

  return (
    <form style={{ marginTop: "20px", width: "25%" }}>
      <h3 style={{ color: "white" }}>Sign up:</h3>
      <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input type="email" placeholder="email" {...bindFirstName} />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">%</InputGroupAddon>
        <Input type="password" placeholder="password" {...bindLastName} />
      </InputGroup>
      <Button
        onClick={handleSubmit}
        block
        style={{
          marginTop: "20px",
          backgroundColor: "#e50914",
          borderColor: "#e50914"
        }}
      >
        OK
      </Button>
    </form>
  );
}
