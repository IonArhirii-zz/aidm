import React from "react";
import s from'./Dialogs.module.css';
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";
import NewMessage from "./newMessage/newMessage";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs
    .map( d => <DialogItem image={d.image} name={d.name} id={d.id}/>);
  let messagesElements = props.state.messages
    .map( m => <Message message={m.message} />);
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }

        <NewMessage 
          newPostMessage={props.state.newPostMessage}
          dispatch={props.dispatch} />
      </div>
      
    </div>
  )
}

export default Dialogs;