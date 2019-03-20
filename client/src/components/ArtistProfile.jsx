import React from 'react';

function ArtistProfile(props) {
  const { artist } = props;
  return(
    <div>
    {artist && artist.first_name}
    {artist.last_name}
    <br/>
    {artist.instrument}
    <img src={artist.img} alt="artist image"/>
    </div>
  )
}

export default ArtistProfile;
