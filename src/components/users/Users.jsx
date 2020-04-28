import React from 'react';
import './users/users.css'
import userPhoto from '../../assets/img/male-icon.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i=1; i <= pagesCount; i++) {
    pages.push(i);
  }
    return <div>
      <ul className='pager'>
        {pages.map( p => {
          return <li className={props.currentPage === p && "selectedPage"}
          onClick={(e) => {props.onPageChanged(p);}}>{p}</li>
        })}
      </ul>
      {
        props.users.map(u => <div key={u.id}>
        <span>
          <div className='userPhoto__wrapper'>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null
                ? u.photos.small : userPhoto} alt={u.name}/>
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button disabled={props.followingInProgress
                    .some(id => id === u.id)} 
                        onClick={() => {props.unfollow(u.id); }}>
                  Unfollow</button>
              : <button disabled={props.followingInProgress
                    .some(id => id === u.id)} 
                        onClick={() => { props.follow(u.id); }}>
                  Follow</button>}
          </div>
        </span>
          <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
        </div>)
      }
    </div>;
};


export default Users;

