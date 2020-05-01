import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/formsControl/formsControls";
import {required} from "../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} component={Input} 
               validate={[required]}
               name={'login'}/>
      </div>
      <div>
        <Field placeholder={'Password'} component={Input}
               name={'password'}
               validate={[required]} />
      </div>
      <div>
        <Field type={'checkbox'} name={'remember me'} component={Input}/> remember me
      </div>
      <div>
        <button className={'button'}>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

export default LoginPage;
