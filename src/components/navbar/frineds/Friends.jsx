import React from 'react';
import './Friends.css';
import Friend from "./friend/Friend";

const Friends = (props) => {
  let leftSideFiends = props.friends.map( f => <Friend image={f.image} name={f.name} />);
  
  return (
    <div className="friends default-margin-t">
      <h3>Friends</h3>
      <div className="friend__list d-flex">
        {leftSideFiends}
      </div>
    </div>
  );
}

export default Friends;