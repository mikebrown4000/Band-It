import React from 'react'
import CommentForm from './CommentForm'

export default (props) => {

  const { commentForm, band, handleCommentSubmit, handleNestedChange, handleDelete, handleJoinBand } = props;
  const { name, band_description, band_img, genre, id } = band;
  props.getBand(id, props.match.params.id)
  return(
    <div>
      <div className='main-band-view'>
        <div className='main-band-content'>
          <h2 className="main-band-title">
            {name}
          </h2>
        </div>
        <div className='band-logo-description'>
          <div id='band-logo'>
            <img id='band-logo-img' src={band_img} alt="Band Img"/>
            <p id='band-content-p'>
              Genre: {genre}
            </p>
          </div>
          <div id='band-description'>
            {band_description}
          </div>
        </div>
      </div>
      <div className='join-delete-button'>
        <button id='join-band' onClick={(id) => handleJoinBand(props.match.params.id)}>
          Join Band
        </button>
        <input onClick={()=>(handleDelete(band.id))} value='Delete band' type='submit'/>
      </div>
    </div>
  )
}
