import React from 'react';
import { Link, Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import ListItem from './ListItem';

function BandList(props){
  const { bands } = props;
  return(
    <div>
      {bands.map(band =>{
        const { name, band_description, band_img, genre, id } = band;
        const listItem = {
          title: name,
          endpoint: `/bands/profile/${id}`,
          img: band_img,
          field1: band_description,
          field2: genre,
        }
        return(
          <ListItem listItem={listItem} key={id} />
        )
      })}
    </div>
  );
}

export default withRouter(BandList);
