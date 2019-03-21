import React from 'react';
import CommentForm from './CommentForm';

function ArtistProfile(props) {
  const { artist, handleCommentSubmit, handleNestedChange, handleNestedCheck, commentForm } = props;
  return(
    <div>

    {artist && artist.first_name}&nbsp;
    {artist.last_name} &nbsp;
    {artist.instrument}

    <br/>
    <img src={artist.img} alt="artist image"/>
    <br/>
    <p>About me:
    {artist.artist_description}</p>
    <CommentForm {...props} commentForm={commentForm} />

    </div>
  )
}

export default ArtistProfile;
