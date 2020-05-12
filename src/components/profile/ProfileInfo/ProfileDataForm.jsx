import React, {useState} from 'react';
import {createField, Input, Textarea} from "../../common/formsControl/formsControls";
import {reduxForm} from "redux-form";
import styles from "../../common/formsControl/formControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return <form onSubmit={handleSubmit} className="profile__info">
    <div>
      <button>Save</button>
    </div>
    { error && <div className={styles.formSummeryError}>
      {error}
    </div>}

    <div className="profile__row profile__full">
      <div className="label profile__full-label">
        Full name:
      </div>

      <div className="profile__full-input">
        {createField('Full Name', 'fullName', [], Input)}
      </div>
    </div>

    <div className="profile__row profile__looking-a-jon">
      <div className="label profile__web-site-label">
        Looking for a Job:
      </div>
      <div className="profile__web-site-value">
        {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
      </div>
    </div>

    <div className="profile__row profile__looking-a-jon">
      <div className="label profile__web-site-label">
        My professional skills:
      </div>
      <div className="profile__web-site-value">
        {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
      </div>
    </div>

    <div className="profile__row profile__education">
      <div className="label profile__education-label">
        About Me:
      </div>
      <div className="profile__education-value">
        {createField('About Me', 'aboutMe', [], Textarea)}
      </div>
    </div>
    <div className="profile__row profile__education">
      <div className="label profile__contact-label">
        Contacts:
      </div>
      <div className="profile__contact-value">
        {Object.keys(profile.contacts).map(key => {
          return <div key={key} className={'contact'}>
            <b>{key}:</b>
            {createField(key, 'contacts.' + key, [], Input)}
          </div>
        })}
      </div>
    </div>
  </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
