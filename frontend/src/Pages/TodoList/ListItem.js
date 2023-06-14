import React from 'react';
import './List.css';

function Post(props) {
  return (
    <div id='post'>
      <span>{props.id}</span>
      <span>{props.title}</span>
    </div>
  )
}

export default Post;