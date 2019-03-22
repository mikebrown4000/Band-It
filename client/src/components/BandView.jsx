import React from 'react'
import CommentForm from './CommentForm'

export default (props) => {

  const { commentForm, band, handleCommentSubmit, handleNestedChange, handleDelete, handleJoinBand, members } = props;
  const { name, band_description, band_img, genre, id } = band;
  props.getBand(id, props.match.params.id)
  return(
    <div className='main-band'>
      <div className='main-band-view'>
        <div className='band-img'>
          <h3 className='band-title'>{name}</h3>
          <hr />
          <img className='main-band-img' src={band_img} alt='band-img' />
        </div>
        <div className='band_description'>
          <p>__________________</p>
          <h3>KEEP IN TOUCH</h3>
            <div className='band-description-logos'>
              <img className='band-logos' src='https://www.rootshummus.com/wp-content/uploads/2016/07/facebook-circle-black.png'/>
              <img className='band-logos' src='https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/a/8b/a8bcac00-3e1a-11e9-9fc9-9f899635ebc3/5c7c7bb9a07ec.image.png?resize=400%2C400'/>
              <img className='band-logos' src='https://susanrowlen.com/wp-content/uploads/Youtube.png'/>
              <img className='band-logos' src='http://www.transparentpng.com/thumb/logo-instagram/mrG45j-instagram-black-logo-free-download.png'/>
            </div>
          <hr />
          <h3> About Us: </h3>
          <p className='band_description-p'>{band_description}</p>
          <a href='#'>Read More</a>
        </div>

        {members.map(member => (
          <div>
            {member.first_name}
          </div>
        ))}
        
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
