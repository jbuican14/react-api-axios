import React, { Component } from 'react';
import News from './components/News'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to News Built in React</h1>
        </header>
        <div className="Form">
          <div className="selectField">
          <select defaultValue="gb">
            <option value="default" disabled>Choose your option</option>
            <option value="us">USA</option>
            <option value="gb">UK</option>
            <option value="all">CA</option>
          </select>
          <label>News Select</label>
        </div>
        </div>
        <News topic={"gb"} /> 
      </div>
    );
  }
}

export default App;
