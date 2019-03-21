import React from 'react';
import CommentForm from './CommentForm';
import RegisterForm from './RegisterForm'

function ArtistProfile(props) {
  const {
    artist,
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
    img,
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
      <CommentForm {...props} commentForm={commentForm} />
      <button onClick={handleEditArtistToggle}>edit</button>
      <RegisterForm
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
       />

    </div>
  )
}

export default ArtistProfile;
