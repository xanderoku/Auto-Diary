import React, { Component } from "react";
import { getCarsFetch } from "../actions/actions";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import { Spinner, Col, Row } from "reactstrap";
import "./allCar.css";
import OneCar from "../oneCar/oneCar";
import AddButton from "../mainAddBtn/mainAddBtn"

class AllCar extends Component {

  componentDidMount() {
    const idUser = Cookies.get("user");
    this.props.fetchCar("car/allcars", idUser);
  }

  render() {
    return (
      <div className="all-car">
        {this.props.allCars ? (
          <>
          <OneCar />
          <AddButton />
          </>
        ) : (
          <Spinner
            color="danger"
            style={{ width: "9rem", height: "9rem" }}
            className="spinner"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCars: state.allCars.carAll
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCar: (url, id) => dispatch(getCarsFetch(url, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCar);
