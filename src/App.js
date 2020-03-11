import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import ButtonAppBar from './Components/Navigation/AppBar';
import MainPage from './Components/Pages/Main';
import LoginCard from './Components/Pages/Login'
import UserReg from './Components/Pages/UserReg'


class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
        isLoggedIn: false,
        loggedInUser: "",
        userRole: "",
    }
  }

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.setState({isLoggedIn});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn)

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
}

export default App;
