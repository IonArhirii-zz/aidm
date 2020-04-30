const SEND_MESSAGE = 'ADD-MESSAGE';

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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  };
};

export default dialogsReducer;