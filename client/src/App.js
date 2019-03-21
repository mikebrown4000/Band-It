import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import './style/listItem.css'
import Main from './components/Main';
import Header from './components/Header';
import { createArtist, fetchArtists, deleteArtist, updateArtist, fetchArtist, loginArtist } from './services/artists';
import LoginForm from './components/LoginForm';
import { createBand, fetchBands, fetchBand } from './services/bands';
import { updateToken } from './services/api-helper'
import { fetchComments, createComment } from './services/comments';


class App extends Component {
  constructor() {
    super();

    this.state = {
      artists: [],
      artist: {},
      bands: [],
      band: {},
      band_img: '',
      first_name: '',
      last_name: '',
      artist_description: '',
      age: '',
      instrument: '',
      location: '',
      looking: false,
      password: '',
      email: '',
      name: '',
      img: '',
      band_description: '',
      genre: '',
      commentForm: {
        content: '',
        commenter_id: '',
        topic_id: '',
        as_band: '',
        to_band: '',
      }
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNestedChange = this.handleNestedChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreateBand = this.handleCreateBand.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.getArtist = this.getArtist.bind(this);
    this.getBand = this.getBand.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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
    const { name, value } = e.target;
    this.setState(prevState =>({
      commentForm: {
        ...prevState.commentForm,
        [name]: value
      }
    }));
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
      band_description,
      genre,
      band_img
    } = this.state;

    const newBand = await createBand({
      name,
      band_description,
      genre,
      band_img
    });

    const bands = await fetchBands();
    this.setState({
      bands
    })
    this.setState({
      name: '',
      band_description: '',
      genre: '',
      band_img: ''
    })
    this.props.history.push(`/bands`);
  }


  async handleSubmit(e) {
    e.preventDefault();
    const {
      first_name,
      last_name,
      age,
      img,
      artist_description,
      instrument,
      location,
      looking,
      password,
      email,

    } = this.state;

    const newArtist = await createArtist({
      first_name,
      last_name,
      age,
      img,
      artist_description,
      instrument,
      location,
      looking,
      password,
      email
    });
    const artists = await fetchArtists();
    this.setState({
      artists
    });
    this.setState({
      artists,
      first_name: '',
      last_name: '',
      age: '',
      img: '',
      artist_description: '',
      instrument: '',
      location: '',
      looking: '',
      password: '',
      email: ''
    })
    this.props.history.push(`/login`);
  }


  async handleCommentSubmit(e) {
    e.preventDefault();
    const { content, commenter_id, topic_id } = this.state.commentForm;
    const newComment = await createComment({content, commenter_id: 2, topic_id: 1});
    const comments = await fetchComments(2);
    this.setState({
      comments
    });
  }

  async handleLogin(e){
  e.preventDefault();
  const { email, password } = this.state;
   const user = await loginArtist({email, password});
   this.setState({
      email: '',
      password: '',
   })
   this.props.history.push(`/bands`);
 }

 async handleLogout(e){
   console.log('hi');
   updateToken();
   this.props.history.push(`/login`);
 }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header handleLogout={this.handleLogout}/>
        <Main
          artists={this.state.artists}
          getArtist={this.getArtist}
          artist={this.state.artist}

          handleChange={this.handleChange}
          handleNestedChange={this.handleNestedChange}
          handleCheck={this.handleCheck}

          handleSubmit={this.handleSubmit}
          handleLogin={this.handleLogin}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          email={this.state.email}
          password={this.state.password}
          location={this.state.location}
          instrument={this.state.instrument}
          age={this.state.age}
          artist_description={this.state.artist_description}
          img={this.state.img}


          bands={this.state.bands}
          getBand={this.getBand}
          band={this.state.band}

          handleCreateBand={this.handleCreateBand}
          genre={this.state.genre}
          name={this.state.name}
          band_description={this.state.band_description}
          band_img={this.state.band_img}


          commentForm={this.state.commentForm}
          handleCommentSubmit={this.handleCommentSubmit}
         />
      </div>
    );
  }
}

export default withRouter(App);
