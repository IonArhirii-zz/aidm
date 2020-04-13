import React from "react";
import s from'./../Dialogs.module.css';


const Message = (props) => {
  return (
    <div className={s.messageRow}>
      <div className={s.message + ' ' + s.myMessage}>{props.message}</div>
    </div>
  );
}

export default Message;