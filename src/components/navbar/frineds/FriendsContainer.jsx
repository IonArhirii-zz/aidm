import React from 'react';
import './Friends.css';
import Friend from "./friend/Friend";
import StoreContex from "../../../StoreContext";

const FriendsContainer = (props) => {
  return (
    <StoreContex.Cosumer>
      { (store) => {
        let state = store.getState();
        let leftSideFiends = state.friends.map( f => <Friend image={f.image} name={f.name} />);
        
        return <div className="friends default-margin-t">
          <h3>Friends</h3>
          <div className="friend__list d-flex">
            {leftSideFiends}
          </div>
        </div>
      }}
    </StoreContex.Cosumer>
  );
};

export default FriendsContainer;