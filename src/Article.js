import React from 'react';
import './Article.css'
export default function Article({title, body}) {
  return(
    <div className = "article">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}