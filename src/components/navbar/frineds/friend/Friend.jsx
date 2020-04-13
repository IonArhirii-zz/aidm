import React from 'react';
import './../Friends.css';

const Friend = (props) => {
  return (
    <div className="friend__item d-flex">
      <div className="friend__image"><img src={props.image} alt={props.name} /></div>
      <div className="friend__name">{props.name}</div>
    </div>
  );
};

export default Friend;