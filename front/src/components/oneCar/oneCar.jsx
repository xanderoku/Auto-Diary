import React from "react";
import { Button, Row, Col } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";
import TimeLine from "../timeLine/TimeLine";
import img from "./vw.png";
import "./onecar.css";
import { deleteCar, selectedCar } from "../actions/actions";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

class OneCar extends React.Component {
  state = {
    show: false
  };

  render() {
    console.log(this.props.allCars);
    return (
      <>
        {this.props.allCars.map((value, index) => {
          return (
            <ReactCSSTransitionGroup
              transitionName="anim"
              transitionAppear={true}
              transitionAppearTimeout={5000}
              transitionEnter={true}
              transitionLeave={true}
            >
              <Row>
                <Col
                  className={`col-md-4 offset-md-4 ${
                    this.props.greet
                  }`}
                >
                  <Row>
                    <Col className="col-md-4 ">
                      <img
                        src={value.imgCar}
                        className="rounded mx-auto d-block car-img"
                        alt={index}
                      />
                    </Col>
                    <Col className="col-md-8 text-center ">
                      <div className="brand-model">
                        <div
                          className="delete"
                          onClick={() =>
                            this.props.deleteCars(
                              value.id,
                              Cookies.get("user")
                            )
                          }
                        >
                          <p>
                            <b>+</b>
                          </p>
                        </div>
                        <h4 className="brand">{value.brand}</h4>
                        <h4 className="model">{value.model}</h4>
                      </div>
                      <p>
                        VIN: {value.vin} Mileage: {value.mileage}
                      </p>
                      <Button
                        color="danger"
                        onClick={() =>
                          this.state.show
                            ? this.setState({ show: false })
                            : this.setState({ show: true })
                        }
                      >
                        Statistics
                      </Button>

                      <Link
                        to={"/typeOfWork"}
                        activeClassName="active"
                      >
                        <Button
                          color="danger"
                          onClick={() =>
                            this.props.selectedCar(value._id)
                          }
                        >
                          Add works
                        </Button>
                      </Link>
                      <Link to={"/stats"} activeClassName="active">
                        <Button color="danger">
                          Service interval
                        </Button>
                      </Link>
                    </Col>
                    <Row>
                      <Col className="time-line">
                        {this.state.show ? <TimeLine /> : null}
                      </Col>
                    </Row>
                  </Row>
                </Col>
              </Row>
            </ReactCSSTransitionGroup>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    greet: state.showCar,
    allCars: state.allCars.carAll
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCars: (car_id, user_id) => dispatch(deleteCar(car_id, user_id)),
    selectedCar: value => dispatch(selectedCar(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneCar);
