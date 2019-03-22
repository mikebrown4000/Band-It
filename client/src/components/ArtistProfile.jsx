import React from 'react';
import CommentForm from './CommentForm';
import RegisterForm from './RegisterForm'
import ArtistComments from './ArtistComments'
import { verifyOwnership } from '../services/artists'

function ArtistProfile(props) {
  const {
    artist,
    comments,
    handleCommentSubmit,
    handleNestedChange,
    handleNestedCheck,
    commentForm,
    getArtist,
    handleChange,
    first_name,
    last_name,
    email,
    password,
    location,
    instrument,
    age,
    artist_description,
    looking,
    handleCheck,
    handleSubmit,
    handleEditArtistToggle,
    handleEditArtist,
    edit,
    img,
    handleDeleteArtist,
    owner
  } = props;

  getArtist(artist.id, props.match.params.userid)

    return(
    <div className="main-artist">
        <h1 className="main-artist-title">{artist && artist.first_name}&nbsp;
        {artist.last_name} &nbsp;</h1>
        <p>____________________________________________________________</p>
        <div className="main-artist-view">
        <br/>
        <div className="main-artist-img-instrument">
          <img className="main-artist-img" src={artist.img} alt="artist image"/>
          <p className="artist-p">Intrument: {artist.instrument}</p>
          <p className="artist-p">Location: {artist.location}</p>

        </div>
        <br/>
        <div className="main-artist-description">
        <p>__________________</p>
        <h3>CONTACT ME</h3>
          <div className='band-description-logos'>
            <img className='band-logos' src='https://www.rootshummus.com/wp-content/uploads/2016/07/facebook-circle-black.png'/>
            <img className='band-logos' src='https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/a/8b/a8bcac00-3e1a-11e9-9fc9-9f899635ebc3/5c7c7bb9a07ec.image.png?resize=400%2C400'/>
            <img className='band-logos' src='https://susanrowlen.com/wp-content/uploads/Youtube.png'/>
            <img className='band-logos' src='http://www.transparentpng.com/thumb/logo-instagram/mrG45j-instagram-black-logo-free-download.png'/>
            <hr />
          </div>
          <p className="artist-p">About Me:</p>
            <p>{artist.artist_description}</p>
        </div>
      </div>

        <CommentForm {...props} commentForm={commentForm} artist={artist} />

        <ArtistComments comments={comments} />

        {owner && <button onClick={handleEditArtistToggle}>edit</button>}

        {edit && <RegisterForm
          handleChange={handleChange}
          handleCheck={handleCheck}
          handleSubmit={(e)=>{e.preventDefault(); handleEditArtist(artist.id)}}
          first_name={first_name}
          last_name={last_name}
          email={email}
          password={password}
          location={location}
          instrument={instrument}
          age={age}
          img={img}
          artist_description={artist_description}
          looking={looking}
        />}
        <br/>
        {owner && <input onClick={()=>(handleDeleteArtist(artist.id))} value='Delete artist' type='submit'/>}
    </div>
  )
}

export default ArtistProfile;
