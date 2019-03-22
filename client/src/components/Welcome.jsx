import React, { Component } from 'react';
import ArtistList from './ArtistList';
import { Link, Route } from 'react-router-dom';



function Welcome() {

  return(
    <div className='welcome-page'>
      <div className='welcome-text'>
        <div className='register'>
          <Link to='/login' className='register'> Register </Link>
        </div>
        <h4>Music can be hard but starting a band should be easy. Find Musicians, steal the show</h4>
      </div>
    </div>
  )
}

export default Welcome;
