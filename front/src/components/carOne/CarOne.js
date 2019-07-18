import React, { Component } from 'react'
import Navbar from '../navbar';
import Cars from '../cars';
import { Route, BrowserRouter } from 'react-router-dom';
import Dairy from '../dairy';
import Statistics from '../statistics';
import Profile from '../profile';

export default class CarOne extends Component {
    render() {
        return (
            <>
                <p>Photo: <img src='https://images.carscoops.com/2017/10/BMW-i8-Tuning-28129.jpg' alt='my car'></img></p>
                 <BrowserRouter> 
                         <Navbar /> 
                         <Route exact path='/' component={Profile} /> 
                         <Route path='/dairy' component={Dairy} />
                        <Route path='/statistics' component={Statistics} />
                        {/* <Route path='/carone' component={CarOne} /> */}
                        <Route path='/cars' component={Cars} /> 
                </BrowserRouter>
                </>
        )
    }}