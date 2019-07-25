import React from 'react';
import { connect } from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Row, Col} from 'reactstrap';
import ModelsCar from '../xander/add-service/cars';
import { changeContent, selectCar } from '../actions/actions';
import './carChoise.css';

class CarChoice extends  React.Component {
    state = {
        choise : [],
    }
    render(){
        return(
            <ReactCSSTransitionGroup transitionName="choiseCard" transitionAppear={true} transitionAppearTimeout={300} transitionEnter={true} transitionLeave={true}>
            <Row>
                <Col className="col-md-6 offset-md-3 car-choice">
                    <Row>
                    
                        {ModelsCar.map((value, index) => {
                        return <Col className="col-md car-choise-one" key={index} onClick={() => this.props.chooseCar('form')}>
                        {value.brand}
                        <img src={`/images/${value.img}`} alt="car"/>
                        </Col>
                        })}
                        
                 </Row>
                </Col>
            </Row>
            </ReactCSSTransitionGroup>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        chooseCar: state => dispatch(changeContent(state)),
        carSelect: value => dispatch(selectCar(value)),
    };
  };
export default connect(null, mapDispatchToProps )(CarChoice); 