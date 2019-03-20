import React from 'react'

export default (props) => {
  const { handleCommentSubmit, handleChangeBetter, content, as_band } = props;
  return(
    <form onSubmit={handleCommentSubmit}>

    <input
      type='text'
      name='content'
      placeholder='Talk some smack'
      value={content}
    </

    <input
      onClick={handleCheck}
      type='checkbox'
      name='as_band'
      value={as_band}
    />
    </form>
  )
}
