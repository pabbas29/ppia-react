import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ButtonAppBar from './Components/Navigation/AppBar';
import MainPage from './Components/Pages/Main';


class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <ButtonAppBar />
        <MainPage />
      </div>
    )
  }
}

export default App;
