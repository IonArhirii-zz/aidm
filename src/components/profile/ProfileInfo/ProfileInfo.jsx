import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = (props) => {
  return (
    <div className="profile default-margin-b">
      <div className="profile__inner">
        <div className="profile__avatar">
          <img className="profile__avatar--image"
               src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" alt="avatar"/>
        </div>
        <div className="profile__info">
          <h3 className="profile__name">
            Arhirii I.
          </h3>
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
              Education:
            </div>
            <div className="profile__education-value">
              BSU*11
            </div>
          </div>
          <div className="profile__row profile__web-site">
            <div className="label profile__web-site-label">
              Web Site:
            </div>
            <div className="profile__web-site-value">
              aidm.md
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;