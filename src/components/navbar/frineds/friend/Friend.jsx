import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
  return (
    <div className={s.frineds}>
      <h3>Friends</h3>
      <div className={s.friendsList}>
        <div className={s.friedsItem}>
          <div className={s.friendsImage}>image</div>
          <div className={s.friedsName}>Name</div>
        </div>
      </div>
    </div>
  );
}

export default Friends;