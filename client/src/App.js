import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { createArtist, fetchArtists } from './services/artists';
import { createBand, fetchBands } from './services/bands';

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
      email: '',
      band_name: '',
      band_desc: '',
      band_genre: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreateBand = this.handleCreateBand.bind(this);
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

  async handleCreateBand(ev){
    ev.preventDefault();
    const {
      band_name,
      band_desc,
      band_genre
    } = this.state;

    const newBand = await createBand({
      band_name,
      band_desc,
      band_genre
    });
    const bands = await fetchBands();
    this.setState({
      bands
    })
    this.setState({
      band_name: '',
      band_desc: '',
      band_genre: ''
    })
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
    this.setState({
      first_name: '',
      last_name: '',
      age: '',
      instrument: '',
      location: '',
      looking: '',
      password: '',
      email: ''
    })
  }


  render() {
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
          bands={this.state.bands}
          band_name={this.state.band_name}
          band_desc={this.state.band_desc}
         />
      </div>
    );
  }
}

export default App;
