import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import ButtonAppBar from './Components/Navigation/AppBar';
import MainPage from './Components/Pages/Main';
import LoginCard from './Components/Pages/Login'
import UserReg from './Components/Pages/UserReg'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [loggedInUser, setLLoggedInUser] = useState();
  const [userRole, setUserRole] = useState();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === true);
  }, [])

  if (isLoggedIn) {
    return(
      <div>
        <Router>
          <Header />
          <ButtonAppBar />
          <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/userreg" component={UserReg} />
          </Switch>
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
              <Route path="/userreg" component={UserReg} />
          </Switch>
        </Router>
      </div>
    )
  }
}