import React, { Component } from 'react';
import Cars from '../cars';
export default class Profile extends Component {
    render() {
        return (
            <>
                <h1>ЛИЧНЫЙ КАБИНЕТ</h1>
                <Cars/>
            </>
        )
    }
}
