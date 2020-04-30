import React from 'react';
import './ProfileInfo.css';
import Preloader from "../../common/preloader/Preloader";
import lookingForAJob from '../../../assets/img/looking_for_a_job.jpg';
import notInterested from '../../../assets/img/not_interested.jpeg';
import ProfileStatus from './ProfileStatus';
import defaulImage from './../../../assets/img/male-icon.png';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  
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
                 src={props.profile.photos.large === null ? defaulImage : props.profile.photos.large} alt="avatar"/>
          </div>
          <div className="profile__info">
            <h3 className="profile__name">
              {props.profile.fullName}
            </h3>
            
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            
            <div className="profile__row profile__birth-day">
              <div className="label profile__birth-day-label">
                Date of Birth:
              </div>
              <div className="profile__birth-day-value">
                13 september
              </div>
            </div>
            <div className="profile__row profile__location">
              <div className="label profile__location-label">
                City:
              </div>
              <div className="profile__location-value">
                Chisinau
              </div>
            </div>
            <div className="profile__row profile__education">
              <div className="label profile__education-label">
                About Me:
              </div>
              <div className="profile__education-value">
                {props.profile.aboutMe}
              </div>
            </div>
            <div className="profile__row profile__web-site">
              <div className="label profile__web-site-label">
                Web Site:
              </div>
              <div className="profile__web-site-value">
                {props.profile.contacts.website}
              </div>
            </div>
            <div className="profile__row profile__looking-a-jon">
              <div className="label profile__web-site-label">
                Lookong for a Job:
              </div>
              <div className="profile__web-site-value">
                <img src={props.profile.lookingForAJob === true 
                  ? lookingForAJob 
                  : notInterested} alt='job'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;