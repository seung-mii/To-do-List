import React from 'react';
import './post.css';

function Post(props) {
  return (
    <div id='post'>
      <span>{props.id}</span>
      <span>{props.title}</span>
    </div>
  )
}

export default Post;