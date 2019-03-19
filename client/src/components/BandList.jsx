import React from 'react';

function BandList(props)
{const { bands } = props;
return(
  <div>
    {bands.map(band => (
      <div key={band.id}>
        {band.name}
        {band.genre}
        {band.description}
      </div>
    ))}
  </div>
);
}

export default BandList;
