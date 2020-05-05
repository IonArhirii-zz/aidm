import React from 'react';
import './users/users.css'
import userPhoto from '../../assets/img/male-icon.png'
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div key={user.id}>
      <span>
        <div className='userPhoto__wrapper'>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null
              ? user.photos.small : userPhoto} alt={user.name}/>
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button disabled={followingInProgress
              .some(id => id === user.id)}
                      onClick={() => {
                        unfollow(user.id);
                      }}>
              Unfollow</button>
            : <button disabled={followingInProgress
              .some(id => id === user.id)}
                      onClick={() => {
                        follow(user.id);
                      }}>
              Follow</button>}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  )
};

export default User;

