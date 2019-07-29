import React, { Component } from "react";
import Cookies from "js-cookie";
import Navbar from "../navbar/Navbar2";
import Cars from "../cars";
import { Route, BrowserRouter } from "react-router-dom";
import Diary from "../dairy";
import Statistics from "../statistics";
import Profile from "../profile";
import oneCar from "../oneCar/oneCar";
import Loginform from "../forms/LoginForm";
import Logout from "../forms/Logout";
import withAuth from "./withAuth";
import StartPage from "../start-page/StartPage2";
import TypeOfWork from '../typeOfWork/typeOfWork'

import CarCard from "../xander/CarCard";
import AddCarBrand from "../xander/add-service/AddCarBrand";

export default class App extends Component {
  state = {
    name: "Service Book"
  };
  render() {
    const loggedIn = Cookies.get("user");
    
    if (loggedIn) {
      return (
        <>
          <BrowserRouter>
            <Navbar logged={Cookies.get("user")} />
            <Route exact path="/" component={withAuth(Profile)} />
            <Route path="/logout" component={Logout} />
            <Route path="/diary" component={Diary} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/onecar" component={oneCar} />
            <Route path="/cars" component={Cars} />
            <Route path="/stats" component={CarCard} />
            <Route path="/test2" component={AddCarBrand} />
            <Route exact path="/typeOfWork" component={TypeOfWork} />
            <Route path="/start" component={StartPage} />
          </BrowserRouter>
        </>
      );
    } else {
      return (
        <>
          <BrowserRouter>
            <Navbar />
            <Route exact path="/" component={withAuth(Profile)} />
            <Route path="/login" component={Loginform} />
            <Route path="/start" component={StartPage} />
          </BrowserRouter>
        </>
      );
    }
  }
}
