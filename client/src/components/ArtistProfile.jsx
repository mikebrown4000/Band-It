import React from 'react';

function ArtistProfile(props) {
  const { artist } = props;
  return(
    <div>
    {artist && artist.first_name}&nbsp;
    {artist.last_name} &nbsp;
    {artist.instrument}

    <br/>
    <img src={artist.img} alt="artist image"/>
    <br/>
    <p>About me:
    {artist.artist_description}</p>
    </div>
  )
}

export default ArtistProfile;
