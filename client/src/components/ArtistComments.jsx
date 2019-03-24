import React from 'react'

export default function ArtistComments(props){
  const { comments } = props
  return(
    <div>
      {comments && comments.map(comment => (
        <div key={comment.content}>
          <div>
            {comment.first_name} &nbsp; {comment.last_name}
          </div>

          {comment.content}
        </div>
      ))}
    </div>
  )
}
