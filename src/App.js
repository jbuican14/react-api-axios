import React, { Component } from 'react';
import News from './components/News'; 
import SideNews from './components/Sidenews'; 
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to News Built in React</h1>
        <img src="https://juti.thehackneywick.co.uk/img/myAvatar.png" alt="juti" className="header-img"/>
      </header>
        <div className="row">
          <div className="col s8">
          <News topic={"gb"} /> 
          </div>
          <h2> Here is news about Bitcoin !</h2>
          <div className="col s4">
            <SideNews  topic = {"bitcoin"}/>
          </div>
        </div>       
      </div>
    );
  }
}

export default App;
