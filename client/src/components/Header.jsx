import React from 'react';
import { Link, Route } from 'react-router-dom';

function Header(props) {
  return(
    <div>
      <nav>
        <Link to='/artists'>Artists</Link>
        <Link to='/bands'>Bands</Link>
      </nav>
    </div>
  )
}

export default Header;
