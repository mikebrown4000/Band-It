import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import CreateBandForm from './CreateBandForm';
import ArtistList from './ArtistList';
import BandList from './BandList';
import ArtistProfile from './ArtistProfile';
import LoginForm from './LoginForm';
import BandView from './BandView'


function Main(props) {
  const {
    artist,
    getArtist,
    artists,
    handleChange,
    handleNestedChange,
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
    band,
    getBand,
    formErrors,
    commentForm,
    handleCommentSubmit
  } = props;

  return(
    <div>
      <Route exact path='/' />
      <Route exact path='/login' render={(props) => (
        <LoginForm
        handleLogin={handleLogin}
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
        <Route exact path='/bands' render={(props) => (
          <BandList
            bands={bands}
          />
        )} />
        <Route path='/artists/profile/:userid' render={(props) => (
          <ArtistProfile
            {...props} artist={artist}
          />
        )} />

        <Route path='/bands/profile/:id' render={(props) => (
          <BandView
            {...props}
            band={band}
            getBand={getBand}
            handleNestedChange={handleNestedChange}
            commentForm={commentForm}
            handleCommentSubmit={handleCommentSubmit}
          />
        )} />

       </div>
    </div>
  )
}

export default Main;
