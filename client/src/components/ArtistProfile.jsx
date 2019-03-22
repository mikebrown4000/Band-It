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
    <div>
      {artist && artist.first_name}&nbsp;
      {artist.last_name} &nbsp;
      {artist.instrument}


      <br/>
      <img src={artist.img} alt="artist image"/>
      <br/>
      <p>About me:
        {artist.artist_description}
      </p>

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
