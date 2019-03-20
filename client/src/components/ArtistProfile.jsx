import React from 'react';

function ArtistProfile(props) {
  console.log(props.match);
  const { artist } = props;
  return(
    <div>
    {artist && artist.first_name}
    </div>
  )
}

export default ArtistProfile;
