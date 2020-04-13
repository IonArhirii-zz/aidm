const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you', likesCount: '8'},
        {id: 2, message: 'It\'s my first post man', likesCount: '22'},
        {id: 3, message: 'Second post ihuuuuu', likesCount: '32'}
      ],
      newPostText: 'aidm.md'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Ion'},
        {id: 2, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Andrey'},
        {id: 3, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Alex'},
        {id: 4, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Amy'},
        {id: 5, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Danny'}
      ],
      messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you John?'},
        {id: 3, message: 'Yo Yo'},
        {id: 4, message: 'Yo Amy'},
        {id: 5, message: 'Yo yo Danny'}
      ],
      newPostMessage: 'New Message'
    },
    sidebar: {
      menu: [
        {id: 1, link: '/profile', name: 'Profile'},
        {id: 2, link: '/dialogs', name: 'Messages'},
        {id: 3, link: '/news', name: 'News'},
        {id: 4, link: '/music', name: 'Music'},
        {id: 5, link: '/settings', name: 'Settings'},
      ],
      friends: [
        {id: 1, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Alex'},
        {id: 2, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Amy'},
        {id: 3, image: 'https://img.icons8.com/plasticine/2x/user.png', name: 'Danny'}
      ]
    }
  },
  _callSubscriber() {
    console.log('State was changed');
  },
  
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newPostMessage
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newPostMessage = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_MESSAGE) {
      this._state.dialogsPage.newPostMessage = action.newMessagetext;
      this._callSubscriber(this._state);
    }
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

export const addMessageCreator = () => {
  return { 
    type: ADD_MESSAGE 
  };
};

export const onMessageChangeCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_MESSAGE, 
    newMessagetext: text
  };
};

export default store;

window.store = store;
