import React from 'react';
import './ProfileInfo.css';
import Preloader from "../../common/preloader/Preloader";
import lookingForAJob from '../../../assets/img/looking_for_a_job.jpg';
import notInterested from '../../../assets/img/not_interested.jpeg';
import defaulImage from './../../../assets/img/male-icon.png';
import defaultLargeImage from './../../../assets/img/largePhoto.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({isOwner, savePhoto, ...props}) => {
  if (!props.profile) {
    return <Preloader />
  }
  
  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
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
                 src={props.profile.photos.large || defaulImage} alt="avatar"/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
          </div>
          <div className="profile__info">
            <h3 className="profile__name">
              {props.profile.fullName}
            </h3>
            
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            
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
};

export default ProfileInfo;







// import React, {useState} from 'react';
// import './ProfileInfo.css';
// import Preloader from "../../common/preloader/Preloader";
// import lookingForAJob from '../../../assets/img/looking_for_a_job.jpg';
// import notInterested from '../../../assets/img/not_interested.jpeg';
// import ProfileStatus from './ProfileStatus';
// import defaulImage from './../../../assets/img/male-icon.png';
// import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

// const ProfileInfo = ({profile, status, updateStatus, ...props}) => {
//
//   let [editMode, setEditMode] = useState(false);
//   // let [status, setStatus] = useState(props.status);
//
//   if (!props.profile) {
//     return <Preloader />
//   }
//
//   // const onMainPhotoSelected = (e) => {
//   //   if (e.target.files.length) {
//   //     savePhoto(e.target.files[0]);
//   //   }
//   // };
//
//   return (
//     <div>
//       {/*<div className="hero-banner default-margin-b">
//         <div className="hero-banner__image">
//           <img className="d-block" src="https://www.crbusa.com/wp-content/uploads/2016/12/site-selection-decision-making-maze-1920x640.jpg"
//                alt="hero-banner"/>
//         </div>
//       </div>*/}
//       <div className="hero-banner default-margin-b">
//         <div className="hero-banner__image">
//           <img className="d-block"
//                src={profile.photos.large || lookingForAJob} />
//           {/*{isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> }*/}
//         </div>
//       </div>
//       {editMode
//         ? <ProfileDataForm profile={profile}/>
//         : <ProfileData goToEditMode={() => {
//           setEditMode(true)
//         }} profile={profile} isOwner={isOwner}/> }
//
//
//     </div>
//   );
// };



// const ProfileData = ({profile, isOwner, goToEditMode}) => {
//   return  <div className="profile default-margin-b">
//     {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
//     <div className="profile__inner">
//       <div className="profile__avatar">
//         <img className="profile__avatar--image"
//              src={profile.photos.large === null ? defaulImage : profile.photos.large} alt="avatar"/>
//       </div>
//       <div className="profile__info">
//         <h3 className="profile__name">
//           {profile.fullName}
//         </h3>
//
//         <ProfileStatusWithHooks status={profile.status} updateStatus={profile.updateStatus}/>
//
//         <div className="profile__row profile__birth-day">
//           <div className="label profile__birth-day-label">
//             Date of Birth:
//           </div>
//           <div className="profile__birth-day-value">
//             13 september
//           </div>
//         </div>
//         <div className="profile__row profile__location">
//           <div className="label profile__location-label">
//             City:
//           </div>
//           <div className="profile__location-value">
//             Chisinau
//           </div>
//         </div>
//         <div className="profile__row profile__web-site">
//           <div className="label profile__web-site-label">
//             Web Site:
//           </div>
//           <div className="profile__web-site-value">
//             {profile.contacts.website}
//           </div>
//         </div>
//         <div className="profile__row profile__looking-a-jon">
//           <div className="label profile__web-site-label">
//             Lookong for a Job:
//           </div>
//           <div className="profile__web-site-value">
//             <img src={profile.lookingForAJob === true
//               ? lookingForAJob
//               : notInterested} alt='job'/>
//           </div>
//         </div>
//         <div className="profile__row profile__looking-a-jon">
//           <div className="label profile__web-site-label">
//             Lookong for a Job:
//           </div>
//           <div className="profile__web-site-value">
//             {profile.lookingForAJob ? 'yes' : 'no'}
//           </div>
//         </div>
//         <div className="profile__row profile__looking-a-jon">
//           <div className="label profile__web-site-label">
//             My professional skills:
//           </div>
//           <div className="profile__web-site-value">
//             {profile.lookingForAJobDescription}
//           </div>
//         </div>
//         <div className="profile__row profile__education">
//           <div className="label profile__education-label">
//             About Me:
//           </div>
//           <div className="profile__education-value">
//             {profile.aboutMe}
//           </div>
//         </div>
//         <div className="profile__row profile__education">
//           <div className="label profile__contact-label">
//             Contacts:
//           </div>
//           <div className="profile__contact-value">
//             {Object.keys(profile.contacts).map(key => {
//               return <Contact key={key} contactTitle={key}
//                               contactValue={profile.contacts[key]}/>
//             } )}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// };
// const ProfileDataForm = (profile) => {
//   return <div>
//     Edit Form
//   </div>
// };

// const Contact = ({contactTitle, contactValue}) => {
//   return <div>
//     <b> {contactTitle}: </b> <div> {contactValue} </div>
//   </div>
// };

// export default ProfileInfo;