import React, { Component } from 'react';
import Navbar from '../navbar/Navbar2';
import Cars from '../cars';
import { Route, BrowserRouter } from 'react-router-dom';
import Diary from '../dairy';
import Statistics from '../statistics';
import Profile from '../profile';
import oneCar from '../oneCar/oneCar';
import Regform from '../forms/RegForm';
import Loginform from '../forms/LoginForm';
import Logout from '../forms/Logout';
import withAuth from './withAuth';

import CarCard from '../xander/CarCard'
import AddCarBrand from '../xander/add-service/AddCarBrand';

export default class App extends Component {
    state = {
        name: 'Service Book'
    } 
     render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={withAuth(Profile)} />
          <Route exact path="/signup" component={Regform} />
          <Route path="/login" component={Loginform} />
          <Route path="/logout" component={Logout} />
          <Route path="/diary" component={Diary} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/onecar" component={oneCar} />
          <Route path="/cars" component={Cars} />
          <Route path="/test" component={CarCard} />
          <Route path="/test2" component={AddCarBrand} />
        </BrowserRouter>
      </>
    );
}}