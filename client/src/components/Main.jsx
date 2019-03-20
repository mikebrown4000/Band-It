import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import CreateBandForm from './CreateBandForm';
import ArtistList from './ArtistList';
import BandList from './BandList';
import ArtistProfile from './ArtistProfile';
import LoginForm from './LoginForm';


function Main(props) {
  const {
    artist,
    getArtist,
    artists,
    handleChange,
    first_name,
    last_name,
    email,
    password,
    location,
    instrument,
    age,
    looking,
    handleCheck,
    handleSubmit,
    handleCreateBand,
    handleLogin,
    name,
    description,
    genre,
    bands,
    formErrors
  } = props;

  return(
    <div>
      <h1>BandIt</h1>
      <Route exact path='/' />
      <Route exact path='/login' render={(props) => (
        <LoginForm
        handleChange={handleChange}
        handleLogin={handleLogin}
        formErrors={formErrors}
        />
      )} />
      <Route exact path='/createmusician' render={(props) => (
        <RegisterForm
          handleChange={handleChange}
          handleCheck={handleCheck}
          handleSubmit={handleSubmit}
          first_name={first_name}
          last_name={last_name}
          email={email}
          password={password}
          location={location}
          instrument={instrument}
          age={age}
          looking={looking}
         />
      )}/>
       <div>
        <Route exact path='/artists' render={(props) => (
          <ArtistList
            artists={artists}
            getArtist={getArtist}
          />
        )}/>

        <Route exact path='/createBand' render={(props) => (
          <CreateBandForm
            handleChange={handleChange}
            handleCreateBand={handleCreateBand}
            genre={genre}
            description={description}
            name={name}
           />
        )}/>
        <Route path='/bands' render={(props) => (
          <BandList
            bands={bands}
            />
        )} />
        <Route path='/artists/profile/:userid' render={(props) => (
          <ArtistProfile
            {...props} artist={artist}
          />
        )} />
       </div>
    </div>
  )
}

export default Main;
