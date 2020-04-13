import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreater} from "../../../redux/state";


const MyPosts = (props) => {
  let postElement = 
    props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);
  
  let newPostElement = React.createRef();
  
  let addPost =  () => {
    props.dispatch(addPostActionCreator());
  };
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreater(text));
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
          <button onClick={ addPost } className="button">Add post</button>
        </div>
        { postElement }
      </div>
    </div>
  );
}

export default MyPosts;