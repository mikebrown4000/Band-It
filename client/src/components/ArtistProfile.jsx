import React from 'react';
import CommentForm from './CommentForm';

function ArtistProfile(props) {
  const { artist, handleCommentSubmit, handleNestedChange, handleNestedCheck, commentForm } = props;
  return(
    <div>
    {artist && artist.first_name}
    <CommentForm {...props} commentForm={commentForm} />
    </div>
  )
}

export default ArtistProfile;
