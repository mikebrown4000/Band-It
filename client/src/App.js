import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();

    this.state = {
      artists: [],
      bands: [],
      firstName: '',
      lastName: '',
      age: '',
      instrument: '',
      location: '',
      looking: false,
      password: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  handleCheck() {
    this.setState(prevState => ({
      looking: !prevState.looking
    }));
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Main
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          location={this.state.location}
          instrument={this.state.instrument}
          age={this.state.age}
         />
      </div>
    );
  }
}

export default App;
