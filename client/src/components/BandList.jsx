import React from 'react';
import ListItem from './ListItem'

function BandList(props){
  const { bands } = props;
  return(
    <div>
      {bands.map(band =>{
        const { name, description, img, genre, id } = band;
        const listItem = {
          title: name,
          endpoint: `/bands/profile/${id}`,
          img,
          field1: description,
          field2: genre,
        }
        return(
          <ListItem listItem={listItem} key={id} />
        )
      })}
    </div>
  );
}

export default BandList;
