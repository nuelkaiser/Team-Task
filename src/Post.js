import React from 'react';
import Article from './Article';
import {useState, useEffect} from 'react';
export default  function Post() {
  const [Blogs, setBlogs] = useState(null)

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setBlogs(data))
    }, []
  )

  return (
      <div>
        {
          Blogs &&
          Blogs.map(
            (blog) => <Article title = {blog.title}  body = {blog.body}
            key = {blog.id}/>
          )
        }
      </div>
  )
}