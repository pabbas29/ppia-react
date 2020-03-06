import React, { Component } from 'react';
import LoginCard from './Login';


class MainPage extends Component {
    constructor() {
        super()
        this.state= {
            isLoggedIn: false,
            loggedInUser: "",
            userRole: "",
        }
    }

    render() {
        return(
            <LoginCard />
        )
    }
}

export default MainPage