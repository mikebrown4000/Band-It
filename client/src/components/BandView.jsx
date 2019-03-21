import React from 'react'
import CommentForm from './CommentForm'

export default (props) => {

  const { commentForm, band, handleCommentSubmit, handleNestedChange, handleDelete, handleJoinBand } = props;
  const { name, band_description, band_img, genre, id } = band;
  props.getBand(id, props.match.params.id)
  return(
    <div>
        <h2>
          {name}
        </h2>
        <div>
          <img src={band_img} alt="Band Img"/>
        </div>
        <div>
          {genre}
        </div>
        <div>
          {band_description}
        </div>
        <button onClick={(id) => handleJoinBand(props.match.params.id)}>
          Join Band
        </button>
        <CommentForm {...props} commentForm={commentForm}/>
        <input onClick={()=>(handleDelete(band.id))} value='Delete band' type='submit'/>
    </div>
  )
}
