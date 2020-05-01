import React from "react";
import s from'./Dialogs.module.css';
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControl/formsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogs
    .map( d => <DialogItem image={d.image} name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages
    .map( m => <Message message={m.message} key={m.id}/>);
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
  };
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }

          <div className={s.newMessage}>
            <div className="block__post-message default-margin-b">
              <AddMessageFormRedax onSubmit={addNewMessage} />
            </div>
          </div>
          
      </div>
      
    </div>
  )
};

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
        validate={[required, maxLength50]}       
               name='newMessageBody'
               placeholder="Enter your message" />
        <button className="button">Add Message</button>
    </form>
  )
}

const AddMessageFormRedax = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;