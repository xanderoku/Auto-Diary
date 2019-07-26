import React, { Component } from 'react';
import { Button } from 'carbon-components-react';
import Notification from './Notification';
import {connect} from "react-redux";
import './notifyBtn.css'
import { element } from 'prop-types';
import work from '../works.js';

class Btn extends Component {
  constructor(props) {

    super(props);

    this.state = {
      notification: false,
    };
  }

  showNotification() {
    this.setState(
      { notification: true },
      () => setTimeout(() => this.setState({ notification: false }), 5000)
    );
  }

  
  render(){
   // const { notification } = this.state;
    //const { allCars } = this.props
    return (
      <>
      { function(){
        if (this.props.allCars) {work.forEach(function(item, i, arr) {
        for (let key in item){
            console.log(this.props.allCars)
          }      
            }
          )
        }
      }})}}
      </>
    )
  }
}

    
const mapStateToProps = (state) => {
  return {
    greet: state.showCar,
    allCars: state.allCars.carAll
  }
}
    
    export default connect(mapStateToProps)(Btn);