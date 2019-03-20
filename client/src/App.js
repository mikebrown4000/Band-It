import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import './style/listItem.css'
import Main from './components/Main';
import Header from './components/Header';
import { createArtist, fetchArtists, deleteArtist, updateArtist, fetchArtist } from './services/artists';
import LoginForm from './components/LoginForm';
import { createBand, fetchBands, fetchBand } from './services/bands';

class App extends Component {
  constructor() {
    super();

    this.state = {
      artists: [],
      artist: {},
      bands: [],
      band: {},
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
        password: '',
      },
      commentForm: {
        content: '',
        commenter_id: '',
        topic_id: '',
        as_band: '',
        to_band: '',
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleNestedChange = this.handleNestedChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreateBand = this.handleCreateBand.bind(this);
    this.getArtist = this.getArtist.bind(this);
    this.getBand = this.getBand.bind(this);
  }

  async componentDidMount() {
    await this.getAllArtists();
    await this.getAllBands();
    await this.getBand(2, 1)
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

  async getBand(bandId, propId){
    if (bandId != propId){
      const band = await fetchBand(propId);
      this.setState({
        band
      })
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };

  handleNestedChange(e) {
    const { name, value, form } = e.target;
    console.log(form);
    this.setState(prevState =>({
      commentForm: {
        ...prevState.commentForm,
        [name]: value
      }
    }))
  }

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
    this.props.history.push(`/bands`);
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
    this.props.history.push(`/bands`);
  }


  render() {
    console.log(this.state.commentForm);
    return (
      <div className="App">
        <Header />
        <Main
          artists={this.state.artists}
          getArtist={this.getArtist}
          artist={this.state.artist}

          handleChange={this.handleChange}
          handleNestedChange={this.handleNestedChange}
          handleCheck={this.handleCheck}

          handleSubmit={this.handleSubmit}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          email={this.state.email}
          password={this.state.password}
          location={this.state.location}
          instrument={this.state.instrument}
          age={this.state.age}


          bands={this.state.bands}
          getBand={this.getBand}
          band={this.state.band}

          handleCreateBand={this.handleCreateBand}
          genre={this.state.genre}
          name={this.state.name}
          description={this.state.description}
          formErrors={this.state.formErrors}

          commentForm={this.state.commentForm}
         />
      </div>
    );
  }
}

export default withRouter(App);
