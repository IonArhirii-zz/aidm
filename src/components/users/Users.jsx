import React, {useState} from 'react';
import './users/users.css'
import Paginator from "../common/paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} 
                 pageSize={pageSize} totalItemsCount={totalUsersCount} />
      {
        users.map(u => <User user={u} 
                             followingInProgress={props.followingInProgress}
                             unfollow={props.unfollow} 
                             follow={props.follow} 
                             key={u.id} />)
        
          
      }
    </div>;
};


export default Users;

