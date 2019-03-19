import React from 'react';


function ArtistList(props) {
  const { artists } = props;
  return(
    <div>
      {artists.map(artist => (
        <div className='artists-list' key={artist.id}>
          {artist.first_name}
          {artist.last_name}
        </div>
      ))}
    </div>
  );
}

export default ArtistList;
