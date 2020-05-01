import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field className='textarea' placeholder='Enter Your Post'
             component={'textarea'} name={'newPostText'}
      />
      <button className="button">Add post</button>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {
  let postElement = 
    props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);
  
  let newPostElement = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  
  const onSubmit = (formData) => {
    console.log(formData);
  }
  
  return (
    <div>
      <h3>My posts</h3>

      <div className="posts">
        <div className="block__post-message default-margin-b">
          <AddNewPostFormRedux onSubmit={onAddPost} />
        </div>
        
        { postElement }
      </div>
    </div>
  );
};

export default MyPosts;