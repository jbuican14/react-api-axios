import React, { Component } from 'react';
import News from './components/News'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to News Built in React</h1>
          <img src="https://juti.thehackneywick.co.uk/img/myAvatar.png" alt="juti" className="header-img"/>
        </header>
        <News topic={"gb"} /> 
      </div>
    );
  }
}

export default App;
