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
    img,
    artist_description,
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
    band_description,
    genre,
    bands,
    band,
    band_img,
    getBand,
    commentForm,
    handleCommentSubmit,
    handleDelete,
    handleJoinBand
  } = props;

  return(
    <div>
      <Route exact path='/' />
      <Route exact path='/login' render={(props) => (
        <LoginForm
        handleLogin={handleLogin}
        handleChange={handleChange}
        handleLogin={handleLogin}
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
          img={img}
          artist_description={artist_description}
          looking={looking}
         />
      )}/>
       <div>
        <Route exact path='/artists' render={(props) => (
          <ArtistList
            artists={artists}
            getArtist={getArtist}
            img={img}
          />
        )}/>

        <Route exact path='/createBand' render={(props) => (
          <CreateBandForm
            handleChange={handleChange}
            handleCreateBand={handleCreateBand}
            genre={genre}
            band_description={band_description}
            name={name}
            band_img={band_img}
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
            img={img}
            artist_description={artist_description}
            handleNestedChange={handleNestedChange}
            commentForm={commentForm}
            handleCommentSubmit={handleCommentSubmit}
            handleDelete={handleDelete}
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
            band_img={band_img}
            handleDelete={handleDelete}
            handleJoinBand={(bandId) => handleJoinBand(bandId)}
          />
        )} />

       </div>
    </div>
  )
}

export default Main;
