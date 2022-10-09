import React from 'react'

const Post = ({post}) => {
  return (
    <div className="post">
        <p>User Id : {post.userId}</p>
      <p>Title : {post.title}</p>
      <p>Id: {post.id}</p>
      <p>Body : {post.body}</p>
    </div>
  )
}
export default Post;