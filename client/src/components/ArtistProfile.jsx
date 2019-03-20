import React from 'react';

function ArtistProfile(props) {
  const { artist } = props;
  return(
    <div>
    {artist && artist.first_name}
    </div>
  )
}

export default ArtistProfile;
