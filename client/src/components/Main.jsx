import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import CreateBandForm from './CreateBandForm';
import ArtistList from './ArtistList';
import BandList from './BandList';


function Main(props) {
  const {
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
    name,
    description,
    genre,
    bands
  } = props;

  return(
    <div>
      <h1>BandIt</h1>
      <Route exact path='/' render={(props) => (
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
        <Route path='/artists' render={(props) => (
          <ArtistList
            artists={artists}
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
       </div>
    </div>
  )
}

export default Main;
