import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from "react-redux";
import img from './vw.png';
import  './onecar.css'

 class OneCar extends React.Component{
    render(){
        return(
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <Row>
                <Col className={`col-md-4 offset-md-4 ${this.props.greet}`}>
                    <Row>
                    <Col className="col-md-2 ">
                        <img src={img} style={{width:120}} className="rounded mx-auto d-block " alt=""></img>
                    </Col>
                    <Col className="col-md-10 text-center ">
                        <h4>volkswagen </h4>
                        <Button color="danger">statistic</Button>
                        <Button color="danger">add</Button>
                        <Button color="danger">view</Button>
                    </Col>
                    </Row>
                </Col>
            </Row>
                </ReactCSSTransitionGroup>
        )
    }
}


  const mapStateToProps = (state) => {
    return {
      greet: state.showCar
    }
  }

export default connect(mapStateToProps)(OneCar);