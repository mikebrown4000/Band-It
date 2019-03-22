import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const { handleLogout } = props
  return(
    <div className='whole-div-header'>
      <header className='main-header'>
        <nav className='main-nav'>
          <Link to='/'>Home</Link>
          <Link to='/artists'>Artists</Link>
          <Link to='/bands'>Bands</Link>
          <Link to ='/createband'>Create Your band</Link>
          <Link to ='/createmusician'>Create Musician</Link>
          <button id='logout-button' onClick={handleLogout}>Log Out</button>
        </nav>
        <div>
          <h1>Band-It</h1>
        </div>
      </header>
    </div>
  )
}

export default Header;
