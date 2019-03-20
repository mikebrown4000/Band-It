import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import {withRouter} from 'react-router';


class ArtistList extends Component {

changeThisName(id) {
  this.props.getArtist(id);
  this.props.history.push(`/artists/profile/${id}`)
}


  render() {
    const { artists, getArtist } = this.props;
    return(
      <div>
        {artists.map(artist => (
          <div className='artists-list' key={artist.id}>
            {artist.first_name}
            {artist.last_name}
            <img src={artist.img} alt="image"/>
            <div>
              <a href='' onClick={(e) => {
                e.preventDefault();
                this.changeThisName(artist.id)
              }}>View Profile</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(ArtistList);
