import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  return (
    <div>
      <ProfileInfo profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus} savePhoto={savePhoto} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;