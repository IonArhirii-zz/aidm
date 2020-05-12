import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControl/formsControls";

const maxLength = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field className='textarea' placeholder='Enter Your Post'
             component={Textarea} name={'newPostText'}
             validate={[required, maxLength]}
      />
      <button className="button">Add post</button>
    </form>
  )
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo(props => {
  let postElements =
    [...props.posts]
      .reverse()
      .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div className="posts">
        <div className="block__post-message default-margin-b">
          <AddNewPostFormRedux onSubmit={onAddPost}/>
        </div>

        {postElements}
      </div>
    </div>
  );
});

export default MyPosts;