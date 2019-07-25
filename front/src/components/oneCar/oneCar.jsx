import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from "react-redux";
import TimeLine from '../timeLine/TimeLine'
import img from './vw.png';
import  './onecar.css'

 class OneCar extends React.Component{
    state = {
        show : false
    }
    render(){
        return (
          <ReactCSSTransitionGroup
            transitionName="anim"
            transitionAppear={true}
            transitionAppearTimeout={5000}
            transitionEnter={true}
            transitionLeave={true}
          >
            {this.props.allCars.map((value, index) => {
              return (
                <Row>
                  <Col
                    className={`col-md-4 offset-md-4 ${
                      this.props.greet
                    }`}
                  >
                    <Row>
                      <Col className="col-md-2 ">
                        <img
                          src={value.imgCar}
                          style={{ width: 120 }}
                          className="rounded mx-auto d-block "
                          alt=""
                        />
                      </Col>
                      <Col className="col-md-10 text-center ">
                        <div className="brand-model">
                          <h4 className="brand">{value.brand}</h4>
                       
                          <h4 className="model">{value.model} </h4>
                          </div>
                        <Button
                          color="danger"
                          onClick={() =>
                            this.state.show
                              ? this.setState({ show: false })
                              : this.setState({ show: true })
                          }
                        >
                          statistic
                        </Button>
                        <Button color="danger">add</Button>
                        <Button color="danger">view</Button>
                      </Col>
                      <Row>
                        <Col className="time-line">
                          {this.state.show ? <TimeLine /> : null}
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                </Row>
              );
            })}
          </ReactCSSTransitionGroup>
        );
    }
}


  const mapStateToProps = (state) => {
    return {
      greet: state.showCar,
      allCars: state.allCars.carAll
    }
  }

export default connect(mapStateToProps)(OneCar);