import React, { Component } from 'react';
// import Cars from '../cars';
import OneCar from '../oneCar/oneCar'
import MainAddBtn from '../mainAddBtn/mainAddBtn'


export default class Profile extends Component {
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
