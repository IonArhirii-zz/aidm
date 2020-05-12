import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, ...props}) => {
  return (
    <div>
      <ProfileInfo profile={profile} 
                   isOwner={isOwner} 
                   status={status}
                   saveProfile={props.saveProfile}
                   updateStatus={updateStatus} 
                   savePhoto={savePhoto} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;