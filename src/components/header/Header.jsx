import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import logo from './../../assets/img/AID-logo.png'

const Header = (props) => {
  return (
    <header className="header default-margin-b d-flex">
      <div className="logo d-flex">
        <img src={logo} alt="logo" />
      </div>
      <div className='login-block'>
        {props.isAuth ? props.login
        : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;