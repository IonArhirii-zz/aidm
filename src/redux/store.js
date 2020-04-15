import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
      newMessageBody: ''
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
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;

window.store = store;
