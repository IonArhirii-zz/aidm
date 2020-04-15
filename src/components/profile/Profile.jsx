import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <div className="hero-banner default-margin-b">
        <div className="hero-banner__image">
          <img className="d-block" src="https://www.crbusa.com/wp-content/uploads/2016/12/site-selection-decision-making-maze-1920x640.jpg"
               alt="hero-banner"/>
        </div>
      </div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;