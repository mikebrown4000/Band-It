import React from 'react';

function BandList(props){
  const { bands } = props;
  {bands.map((band) => (
    <div>
      {band.band_name}
      {band.band_genre}
      {band.band_desc}
    </div>
  ))}
}

export default BandList;
