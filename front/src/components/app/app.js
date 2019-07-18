import React, { Component } from 'react';
import Profile from '../profile';

export default class App extends Component {
    state = {
        name: 'Service Book'
    } 
     render() {
    return (
        <>
            Welcome to {this.state.name}
            <Profile />
        </>
    )
}}