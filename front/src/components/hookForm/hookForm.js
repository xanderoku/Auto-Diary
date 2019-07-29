import React, { useState } from "react";
import "./hookForm.css";
import { Button, Input, Form, Label, FormGroup, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import DropDown from "../xander/add-service/ModelDropdown";
import { Redirect } from "react-router-dom";
import { changeContent, showCar } from "../actions/actions";
import { withRouter} from 'react-router'

function HookForm(props) {
  const [mileage, setMileage] = useState("");
  const [vin, setVin] = useState("");
  const [img, setImg] = useState("");
  const idUser = Cookies.get("user");

  const fileSelectedHandler = event => {
    setImg(event.target.files[0]);
  };

  const sendDataCar = async e => {
    e.preventDefault();
    console.log(props.model);
    const formData = new FormData();

    formData.append("imgCar", img);
    formData.append("brand", props.brand);
    formData.append("model", props.model);
    formData.append("mileage", mileage);
    formData.append("vin", vin);
    formData.append("owner", idUser);

    let response = await fetch("/car/register/", {
      mode: "no-cors",
      method: "POST",
      body: formData
    });
    const data = await response.json();
    props.getState("cars");
    props.getCars("oneCarMain");
    props.history.push("/")
  };

  return (
    <Col className="col-md-4 offset-md-4">
    <Form method="POST" onSubmit={sendDataCar}>
      <FormGroup>
        <DropDown />
      </FormGroup>
      <FormGroup>
        <Label for="mileage">Odometer</Label>
        <Input
          value={mileage}
          onChange={e => setMileage(e.target.value)}
          placeholder="Odometer data"
          type="number"
          name="mileage"
          id="mileage"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="vin">VIN number</Label>
        <Input
          value={vin}
          onChange={e => setVin(e.target.value)}
          placeholder="VIN 17 characters"
          type="text"
          name="vin"
          id="vin"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="mileage-input">Upload car image</Label>
        <Input
          onChange={e => fileSelectedHandler(e)}
          placeholder="Email address"
          type="file"
          name="img"
          id="img"
        />
      </FormGroup>
      <FormGroup>
        <Button>Add car</Button>{" "}
      </FormGroup>
    </Form>
    </Col>
  );
}

const mapStateToProps = state => {
  return {
    brand: state.chooseCar.brand,
    model: state.reducer.model,
    showContent: state.showContent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getState: state => dispatch(changeContent(state)),
    getCars: state => dispatch(showCar(state))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HookForm));
