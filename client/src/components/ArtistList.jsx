import React from 'react';

function ArtistList(props){
  const { artists } = props;
  {artists.map((artist) => (
    <div>
      {artist.artist_name}
      {artist.artist_genre}
      {artist.artist_desc}
    </div>
  ))}
}

export default ArtistList;
