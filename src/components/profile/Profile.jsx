import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

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
      <MyPosts posts={props.state.posts}
               newPostText={props.state.newPostText}
               dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;