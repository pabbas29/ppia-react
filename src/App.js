import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import ButtonAppBar from './Components/Navigation/AppBar';
import MainPage from './Components/Pages/Main';
import LoginCard from './Components/Pages/Login'
import UserReg from './Components/Pages/UserReg'


class App extends Component {
  constructor() {
    super()
    this.state= {
        isLoggedIn: true,
        loggedInUser: "",
        userRole: "",
    }
}

  render() {
    const isLoggedIn = this.state.isLoggedIn

    if (isLoggedIn) {
      return(
        <div>
          <Router>
            <Header />
            <ButtonAppBar />
            <MainPage />
          </Router>   
        </div>
      )
    } else {
      return(
        <div>
          <Router>
            <Header />
            <ButtonAppBar />
            <Switch>
                <Route exact path="/" component={LoginCard} />
                <Route path="/login" component={LoginCard} />
                <Route path="/userreg" component={UserReg} />
            </Switch>
          </Router>
        </div>
      )
    }

    
  }
}

export default App;
