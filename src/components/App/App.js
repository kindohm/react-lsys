import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LSystemForm from './../LSystemForm/LSystemForm';
import Drawing from './../Drawing/Drawing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <LSystemForm></LSystemForm>
          <Drawing></Drawing>
        </div>
      </div>
    );
  }
}

export default App;
