import React from "react";
import s from'./../Dialogs.module.css';
import {addMessageCreator, onMessageChangeCreator} from "../../../redux/state";


const NewMessage = (props) => {
  let newMessageElement = React.createRef();
  
  let addMessage = () => {
    props.dispatch(addMessageCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(onMessageChangeCreator(text));
  };

  return (
    <div className={s.newMessage}>
      <div className="block__post-message default-margin-b">
        <textarea className="textarea" 
                  ref={newMessageElement} 
                  onChange={onMessageChange} 
                  value={props.newPostMessage}/>
        <button onClick={ addMessage } className="button">Add Message</button>
      </div>
    </div>
  );
};

export default NewMessage;