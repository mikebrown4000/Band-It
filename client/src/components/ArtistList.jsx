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
      <div className='artist-list-container'>
        {artists.map(artist => (
          <div className='artists-list' key={artist.id}>
            <h3>{artist.first_name}</h3>
            {artist.first_name}&nbsp;
            {artist.last_name}&nbsp;
            <br/>
            {artist.instrument}
            <br/>
            <img className='artist-list-img' src={artist.img} alt="image" width={130}/>

            <div>
              <a href='' id='view-profile' onClick={(e) => {
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
