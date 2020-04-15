const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({
        id: 6,
        message: body
      });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
  };
};

export default dialogsReducer;