import React from "react";
import s from'./../Dialogs.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogsReducer";


const NewMessage = (props) => {
  let newMessageElement = React.createRef();
  
  let sendMessage = () => {
    props.dispatch(sendMessageCreator());
  };

  let onSendMessageClick = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.newMessage}>
      <div className="block__post-message default-margin-b">
        <textarea className="textarea" 
                  onChange={onSendMessageClick} 
                  value={props.newMessageBody}
                  placeholder="Enter your message" />
        <button onClick={ sendMessage } className="button">Add Message</button>
      </div>
    </div>
  );
};

export default NewMessage;