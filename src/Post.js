import React from 'react'

const Post = ({posts}) => {
    // if(loading){
    //     return <h2>Loading...</h2>
    // }
  return (
        <div className='post_container'>
            {posts.map(post=>(
                <div className='post'
                key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
            ))}
        </div>
     )
}

export default Post;