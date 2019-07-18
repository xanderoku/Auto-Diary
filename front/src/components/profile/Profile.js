import React, { Component } from 'react';
import Plus from '../plus';
export default class Profile extends Component {
    render() {
        return (
            <>
                <h1>ЛИЧНЫЙ КАБИНЕТ</h1>
                <Plus />
                {/* <BrowserRouter> */}
                        {/* <Navbar /> */}
                        {/* <Route exact path='/' component={Profile} /> */}
                        {/* <Route path='/dairy' component={Dairy} />
                        <Route path='/statistics' component={Statistics} />
                        <Route path='/carone' component={CarOne} />
                        <Route path='/cars' component={Cars} /> */}
                {/* </BrowserRouter> */}
            </>
        )
    }
}
