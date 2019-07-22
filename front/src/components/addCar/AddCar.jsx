import React from 'react';
import {  Row, Col } from 'reactstrap';
import './addcar.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AddCar extends React.Component{
    render(){
        return(
            <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={true}>
            <Row>
                <Col className="col-md-5 offset-md-4 addCarHead text-center">
                    <h2 id="iakori">Add car</h2>
                </Col>
            </Row>
            </ReactCSSTransitionGroup>
        )
    }
}
export default AddCar;