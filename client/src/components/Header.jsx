import React from 'react';
import { Link, Route } from 'react-router-dom';

function Header(props) {
  return(
    <div className='main-header'>
      <h1>BandIt</h1>
      <nav className='main-nav'>
        <Link to='/'>Home</Link>
        <Link to='/artists'>Artists</Link>
        <Link to='/bands'>Bands</Link>
        <Link to ='/createband'>Create your band</Link>
        <Link to ='/createmusician'>Create a Musician</Link>

      </nav>
    </div>
  )
}

export default Header;
