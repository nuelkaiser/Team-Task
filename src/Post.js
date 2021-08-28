import React from 'react';
import Article from './Article'
export default  function Post({blogs}) {
  return (
      <div>
        {
          blogs.map(
            (blog) => <Article title = {blog.title}  body = {blog.body}/>
          )
        }
      </div>
  )
}