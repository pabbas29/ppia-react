import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ButtonAppBar from './Components/Navigation/AppBar';
import TabelMahasiswa from './Components/Templates/TabelMahasiswa';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <ButtonAppBar />
        <TabelMahasiswa />
      </div>
    )
  }
}

export default App;
