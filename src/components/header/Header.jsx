import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header default-margin-b d-flex">
      <div className="logo d-flex">
        <img src="https://cdn.worldvectorlogo.com/logos/ups.svg" alt="logo" />
      </div>
      <div className='login-block'>
        {props.isAuth ? props.login
        : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;