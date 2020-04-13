import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__inner">
        <div className="post__avatar">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" alt="avatar" />
        </div>
        <div className="post__message">
          {props.message}
        </div>
        <div className="like">
          <span>like {props.likesCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;