const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you', likesCount: '8'},
    {id: 2, message: 'It\'s my first post man', likesCount: '22'},
    {id: 3, message: 'Second post ihuuuuu', likesCount: '32'}
  ],
  newPostText: 'aidm.md'
};

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export const updateNewPostTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
};
export default profileReducer;