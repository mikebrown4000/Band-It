import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { createArtist, fetchArtists } from './services/artists';

class App extends Component {
  constructor() {
    super();

    this.state = {
      artists: [],
      bands: [],
      first_name: '',
      last_name: '',
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

  async componentDidMount() {
    await this.getAllArtists();
  }

  async getAllArtists() {
    const artists = await fetchArtists();
    this.setState({
      artists: artists
    });
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
      first_name,
      last_name,
      age,
      instrument,
      location,
      looking,
      password,
      email
    } = this.state;

    const newArtist = await createArtist({
      first_name,
      last_name,
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
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Main
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
          handleSubmit={this.handleSubmit}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          email={this.state.email}
          password={this.state.password}
          location={this.state.location}
          instrument={this.state.instrument}
          age={this.state.age}
          artists={this.state.artists}
         />
      </div>
    );
  }
}

export default App;
