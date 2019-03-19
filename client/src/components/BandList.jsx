import React from 'react';

function BandList(props)
{const { bands } = props;
return(
  <div>
    {bands.map(band => (
      <div className='bands-list' key={band.id}>
        {band.name}
        {band.genre}
        {band.description}
      </div>
    ))}
  </div>
);
}

export default BandList;
