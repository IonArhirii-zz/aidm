import React, {useState} from 'react';
import './ProfileInfo.css';
import Preloader from "../../common/preloader/Preloader";
import lookingForAJob from '../../../assets/img/looking_for_a_job.jpg';
import notInterested from '../../../assets/img/not_interested.jpeg';
import defaultImage from './../../../assets/img/male-icon.png';
import defaultLargeImage from './../../../assets/img/largePhoto.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({isOwner, savePhoto, profile, saveProfile, ...props}) => {

  let [editMode, setEditMode] = useState(false);
  
  if (!profile) {
    return <Preloader />
  }
  
  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };


  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    });
  };
  
  return (
    <div>
      {/*<div className="hero-banner default-margin-b">
        <div className="hero-banner__image">
          <img className="d-block" src="https://www.crbusa.com/wp-content/uploads/2016/12/site-selection-decision-making-maze-1920x640.jpg"
               alt="hero-banner"/>
        </div>
      </div>*/}
      <div className="profile default-margin-b">
        <div className="profile__inner">

          <div className="profile__avatar">
            <img className="profile__avatar--image"
                 src={profile.photos.large || defaultImage} alt="avatar"/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
          </div>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
          {editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
            : <ProfileData goToEditMode={() => {
              setEditMode(true)
            }} profile={profile} isOwner={isOwner}/> }
            
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

const ProfileData = ({profile, isOwner, goToEditMode, ...props}) => {
  return  <div className="profile__info">
    {isOwner && <div>
      <button onClick={goToEditMode}>Edit</button>
    </div>}
    
    <h3 className="profile__name">
      {profile.fullName}
    </h3>
    
    <div className="profile__row profile__looking-a-jon">
      <div className="label profile__web-site-label">
        Lookong for a Job:
      </div>
      <div className="profile__web-site-value">
        <img src={profile.lookingForAJob === true
          ? lookingForAJob
          : notInterested} alt='job'/>
      </div>
    </div>
    
    <div className="profile__row profile__looking-a-jon">
      <div className="label profile__web-site-label">
        My professional skills:
      </div>
      <div className="profile__web-site-value">
        {profile.lookingForAJobDescription}
      </div>
    </div>
    
    <div className="profile__row profile__education">
      <div className="label profile__education-label">
        About Me:
      </div>
      <div className="profile__education-value">
        {profile.aboutMe}
      </div>
    </div>
    <div className="profile__row profile__education">
      <div className="label profile__contact-label">
        Contacts:
      </div>
      <div className="profile__contact-value">
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key}
                          contactValue={profile.contacts[key]}/>
        })}
      </div>
    </div>
  </div>
};

const Contact = ({contactTitle, contactValue}) => {
  return <div>
    <b> {contactTitle}: </b> <div> {contactValue} </div>
  </div>
};