import React, { Component } from 'react';
// import Cookies from 'js-cookie';
// import axios from 'axios';
// import Cars from '../cars';
import OneCar from '../oneCar/oneCar'
import MainAddBtn from '../mainAddBtn/mainAddBtn'

export default class Profile extends Component {
  state = {
    message: ''
  };

  componentDidMount() {
    // console.log('Profile cOOkies: ', Cookies.get('user'))
  }

    render() {
        return (
          <>
            <OneCar />
            <OneCar />
            <OneCar />
            <MainAddBtn />
          </>
        );
    }
}
