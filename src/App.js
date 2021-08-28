import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import Post from './Post';
export default function App() {
  const [Blog, setBlog] = useState(null)

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setBlog(data))
    }
  )

  return (
    <div>
      {Blog && <Post blogs = {Blog}/>}
    </div>
  )
}