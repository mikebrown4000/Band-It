import React, { Component } from 'react';
import ArtistList from './ArtistList';
import { Link, Route } from 'react-router-dom';



function Welcome() {

  return(
    <div className='welcome-page'>
      <Link to ='/findArtists'> Find Artists </Link>
      <Link to ='/createBand'> Create Band </Link>
    </div>
  )
}

export default Welcome;
