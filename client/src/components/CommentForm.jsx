import React from 'react'

export default (props) => {
  const { handleCommentSubmit, handleNestedChange, handleNestedCheck, commentForm } = props
  const { content, as_band, to_band } = commentForm;
  return(
    <form onSubmit={handleCommentSubmit}>

    <input
      onChange={handleNestedChange}
      type='text'
      name='content'
      placeholder='Talk some smack'
      form='commentForm'
      value={content}
    />

    {/*}<input
      onClick={handleNestedCheck}
      type='checkbox'
      name='as_band'
      form='commentForm'
      value={as_band}
    />*/}

    <input value='Comment' type='submit'/>
    </form>
  )
}
