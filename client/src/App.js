import React, { Component } from 'react';
import './App.css';
const URL = 'http://localhost:6969';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bands: [],
      musicians: []
    }
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
