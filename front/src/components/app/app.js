import React, { Component } from 'react';
// import Navbar from '../navbar';
// import CarOne from '../carOne';
import Cars from '../cars';
import { Route, BrowserRouter } from 'react-router-dom';
import Dairy from '../dairy';
import Statistics from '../statistics';
import Profile from '../profile';
import oneCar from '../oneCar/oneCar'

import CarCard from '../xander/CarCard'
import AddCarBrand from '../xander/add-service/AddCarBrand';

export default class App extends Component {
    state = {
        name: 'Service Book'
    } 
     render() {
    return (
        <>
            {/* Welcome to {this.state.name} */}
            <BrowserRouter>
                        {/* <Navbar /> */}
                        <Route exact path='/' component={Profile} />
                        <Route path='/dairy' component={Dairy} />
                        <Route path='/statistics' component={Statistics} />
                        <Route path='/onecar' component={oneCar} />
                        <Route path='/cars' component={Cars} />
                        <Route path='/test' component={CarCard} />
                        <Route path='/test2' component={AddCarBrand} />

                </BrowserRouter>
        </>
    )
}}