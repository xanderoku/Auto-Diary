import React, { Component } from "react";
import { Button, Input, Form, Label, FormGroup } from "reactstrap";
import { connect } from "react-redux";

class FormTypeOfWorks extends Component {
  state = {
    selected: false,
    service: "",
    oftenService: "",
    mileage: "",
    price: "",
  };

  changeService(e) {
    this.setState({ service: e.target.value });
  }

  changeOftenService(e) {
    this.setState({ oftenService: e.target.value, selected: true });
  }

  changeMileage(e) {
    this.setState({ mileage: e.target.value });
  }

  changePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    await fetch("car/works", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        service: this.state.service,
        oftenService: this.state.oftenService,
        mileage: this.state.mileage,
        price: this.state.price,
        car_id: this.props.car_id
      })
    });
    this.props.closeForm();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <h1>
            {this.props.showCategory}
            {this.props.car_id}
          </h1>
          <FormGroup>
            <Label>You can choose from often used services</Label>
            <Input
              type="select"
              name="oftenService"
              onChange={e => this.changeOftenService(e)}
            >
              <option defaultValue />
              {this.props.oftenUsed.split(",").map((value, index, item) => {
                return <option>{value}</option>;
              })}
            </Input>
          </FormGroup>

          {!this.state.selected ? (
            <FormGroup>
              <Label>Which service was done</Label>
              <Input
                name="service"
                placeholder="write here the service"
                onChange={e => this.changeService(e)}
                value={this.state.service}
              />
            </FormGroup>
          ) : null}

          <FormGroup>
            <Label>Mileage when the work was done</Label>
            <Input
              name="mileage"
              placeholder="write here the service"
              onChange={e => this.changeMileage(e)}
              value={this.state.mileage}
            />
          </FormGroup>
          <FormGroup>
            <Label>Spare parts and service price</Label>
            <Input
              name="price"
              placeholder="write here the service"
              onChange={e => this.changePrice(e)}
              value={this.state.price}
            />
          </FormGroup>
          <FormGroup>
            <Button color="danger">Submit a service</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    car_id: state.reducer.id
  };
};

export default connect(mapStateToProps)(FormTypeOfWorks);
