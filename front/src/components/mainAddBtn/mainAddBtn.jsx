import React from 'react';
import { Row, Col } from 'reactstrap';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
// import AddCar from '../addCar/AddCar'
import { showCar } from '../actions/actions' 
import './btn.css';
import AddCarBrand from '../xander/add-service/AddCarBrand'

class MainAddBtn extends React.Component {
    state={
        show:false
    }
    render(){
        return(
            <div>
            <Row>
                <Col md={{size:1, offset:6}} className='text-center maimBtn'>
                        <a href="#iakori" name="iakori" onClick ={() => this.state.show ?
                             (this.setState({show:false}), this.props.getState('oneCarMain')):
                              (this.setState({show:true}), this.props.getState('oneCarMain1'))}>
                         + 
                        </a>
                </Col>
            </Row>
                {this.state.show ? <AddCarBrand /> : null}
            </div>
        )
    }
} 
const mapDispatchToProps = dispatch => {
    return {
        // showText: text => dispatch(onSayHello(text))
        getState: state => dispatch(showCar(state))
    };
  };
export default connect(null, mapDispatchToProps)(MainAddBtn);