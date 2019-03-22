import React from 'react'

export default (props) => {
  const { artist, handleCommentSubmit, handleNestedChange, handleNestedCheck, commentForm } = props
  const { content, as_band, to_band } = commentForm;
  return(
    <form onSubmit={(e)=>{e.preventDefault(); handleCommentSubmit(artist.id)}}>

    <textarea
      id='comment-text-area'
      cols='50'
      rows='5'
      className='main-form'
      onChange={handleNestedChange}
      type='text'
      name='content'
      placeholder='Ask Or Comment'
      form='commentForm'
      value={content}
    />
    <br/>

    {/*}<input
      onClick={handleNestedCheck}
      type='checkbox'
      name='as_band'
      form='commentForm'
      value={as_band}
    />*/}

    <input id='comment-button' value='Comment' type='submit'/>
    </form>
  )
}
