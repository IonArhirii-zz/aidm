import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElement = 
    props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);
  
  let newPostElement = React.createRef();
  
  let onAddPost =  () => {
    props.addPost();
  };
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  
  return (
    <div>
      <h3>My posts</h3>

      <div className="posts">
        <div className="block__post-message default-margin-b">
          <textarea className="textarea" 
                    onChange={onPostChange}
                    ref={newPostElement} 
                    value={props.newPostText} />
          <button onClick={ onAddPost } className="button">Add post</button>
        </div>
        { postElement }
      </div>
    </div>
  );
};

export default MyPosts;