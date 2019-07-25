import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { showCar } from '../actions/actions';
import './btn.css';
import CarChoice from '../carChoise/CarChoise';
import HookForm from '../hookForm/hookForm';

class MainAddBtn extends React.Component {
    state={
        show:false,
    }
    render(){
        return (
          <div>
            <Row>
              <Col
                md={{ size: 1, offset: 6 }}
                className="text-center mainBtn"
              >
                <a
                  href="#iakori"
                  name="iakori"
                  onClick={() =>
                    this.state.show
                      ? (this.setState({ show: false }),
                        this.props.getState("oneCarMain"))
                      : (this.setState({ show: true }),
                        this.props.getState("oneCarMain1"))
                  }
                >
                  +
                </a>
              </Col>
            </Row>
            {this.props.showContent === "cars" && this.state.show ? (
              <CarChoice />
            ) : null}
            {this.props.showContent === "form" ? <HookForm /> : null}
          </div>
        );
    }
} 

const mapStateToProps = (state) => {
    return {
        showContent: state.showContent
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        getState: state => dispatch(showCar(state)),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(MainAddBtn);