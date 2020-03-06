import React, { Component } from 'react';
import LoginCard from './Login';
import UserReg from './UserReg'


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
        const isLoggedIn = this.state.isLoggedIn

        if (isLoggedIn) {
            return(
                <UserReg />
            )
        } else {
            return(
                <LoginCard />
            )
        }   
    }
}

export default MainPage