import React from "react";
import s from'./Dialogs.module.css';
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogs
    .map( d => <DialogItem image={d.image} name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages
    .map( m => <Message message={m.message} key={m.id}/>);
  let newMessageBody = state.newMessageBody;
  
  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }

        {/*<NewMessage
          newMessageBody={state.newMessageBody}
          dispatch={props.dispatch} />*/}

        <div className={s.newMessage}>
          <div className="block__post-message default-margin-b">
            <textarea className="textarea"
                onChange={onNewMessageChange}
                value={newMessageBody}
                placeholder="Enter your message" />
            <button onClick={ onSendMessageClick } className="button">Add Message</button>
          </div>
        </div>
          
      </div>
      
    </div>
  )
};

export default Dialogs;