import React from 'react';

function BandList(props)
{const { bands } = props;
return(
  <div>
    {bands.map(band => (
      <div key={band.id}>
        {band.first_name}
        {band.last_name}
      </div>
    ))}
  </div>
);
}

export default BandList;
