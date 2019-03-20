import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import './style/listItem.css'
import Main from './components/Main';
import Header from './components/Header';
import { createArtist, fetchArtists, deleteArtist, updateArtist, fetchArtist } from './services/artists';
import LoginForm from './components/LoginForm';
import { createBand, fetchBands } from './services/bands';

class App extends Component {
  constructor() {
    super();

    this.state = {
      artists: [],
      bands: [],
      artist: {},
      first_name: '',
      last_name: '',
      age: '',
      instrument: '',
      location: '',
      looking: false,
      password: '',
      email: '',
      name: '',
      description: '',
      genre: '',
      formErrors:{
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreateBand = this.handleCreateBand.bind(this);
    this.getArtist = this.getArtist.bind(this);
  }

  async componentDidMount() {
    await this.getAllArtists();
    await this.getAllBands();
    await this.getArtist(1);
  }

  async getArtist(id) {
    if (id !== this.state.artist.id) {
      const artist = await fetchArtist(id);
      this.setState({
        artist
      });
    }
  }

  async getAllArtists() {
    const artists = await fetchArtists();
    this.setState({
      artists: artists
    });
  }

  async getAllBands(){
    const bands = await fetchBands();
    this.setState({
      bands
    })
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
      name,
      description,
      genre
    } = this.state;

    const newBand = await createBand({
      name,
      description,
      genre
    });
    const bands = await fetchBands();
    this.setState({
      bands
    })
    this.setState({
      name: '',
      description: '',
      genre: ''
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
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Main
          getArtist={this.getArtist}
          artist={this.state.artist}
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
          handleSubmit={this.handleSubmit}
          handleCreateBand={this.handleCreateBand}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          email={this.state.email}
          password={this.state.password}
          location={this.state.location}
          instrument={this.state.instrument}
          age={this.state.age}
          artists={this.state.artists}
          bands={this.state.bands}
          genre={this.state.genre}
          name={this.state.name}
          description={this.state.description}
          formErrors={this.state.formErrors}
         />
      </div>
    );
  }
}

export default App;
