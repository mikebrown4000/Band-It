import React from 'react';
import { Link } from 'react-router-dom';
import slider from '../assets/slider.png'

function Header(props) {
  const { handleLogout } = props
  return(
    <div className='whole-div-header'>
      <header className='main-header'>
        <nav className='main-nav'>

          <button id='logout-button' onClick={handleLogout}>Log Out</button>
        </nav>

        <div className="dropdown">
          <img className="dropbtn" src={slider} alt="slider" width={120}/>
          <div className="dropdown-content">
            <Link to='/'>Home</Link>
            <Link to='/artists'>Artists</Link>
            <Link to='/bands'>Bands</Link>
            <Link to ='/createband'>Create Your band</Link>
            <Link to ='/createmusician'>Create A Musician</Link>
          </div>
        </div>
        <div>
          <Link to='/'>
            <h1>Band-It</h1>
          </Link>
        </div>
      </header>

    </div>
  )
}

export default Header;
