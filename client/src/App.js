import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import { createArtist, fetchArtists } from './services/artists';

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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  async handleSubmit(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      age,
      instrument,
      location,
      looking,
      password,
      email
    } = this.state;

    const newArtist = await createArtist({
      first_name: firstName,
      last_name: lastName,
      age,
      instrument,
      location,
      looking,
      password,
      email
    });
    const artists = await fetchArtists();
    this.setState({
      artists
    })
  }


  render() {
    return (
      <div className="App">
        <Main
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
          handleSubmit={this.handleSubmit}
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
