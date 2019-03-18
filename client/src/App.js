import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';

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
    this.checkLooking = this.checkLooking.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  checkLooking() {
    this.setState(prevState => {
      return {
        looking: true
      }
    });
  }


  render() {
    return (
      <div className="App">
        <Welcome
          handleChange={this.handleChange}
          checkLooking={this.checkLooking}
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
