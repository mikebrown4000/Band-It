import React from 'react'
import CommentForm from './CommentForm'

export default (props) => {
  const { commentForm, band, handleCommentSubmit, handleNestedChange } = props;
  const { name, description, img, genre, id } = band;
  props.getBand(id, props.match.params.id)
  return(
    <div>
        <h2>
          {name}
        </h2>
        <div>
          {img}
        </div>
        <div>
          {genre}
        </div>
        <div>
          {description}
        </div>
        <CommentForm {...props} commentForm={commentForm}/>
    </div>
  )
}
