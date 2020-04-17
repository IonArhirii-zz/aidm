import React from 'react';
import s from './NavBar.module.css';
// import Friends from "./frineds/Friends";
// import NavMenu from "./NavMenu/NavMenu";
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
  return (
    // <nav className={s.nav}>
    //   <NavMenu navMenu={props.state.menu} />
    //   <Friends friends={props.state.friends}/>
    // </nav>
    <div>
      <li className={s.mainNav__item}>
      <NavLink className={s.mainNav__link} to="/profile" activeClassName={s.active}>
        Profile
      </NavLink>
        </li>
        <li className={s.mainNav__item}>
      <NavLink className={s.mainNav__link} to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </li>
        <li className={s.mainNav__item}>
      <NavLink className={s.mainNav__link} to="/news" activeClassName={s.active}>News</NavLink>
        </li>
        <li className={s.mainNav__item}>
      <NavLink className={s.mainNav__link} to="/music" activeClassName={s.active}>Music</NavLink>
        </li>
        <li className={s.mainNav__item}>
      <NavLink className={s.mainNav__link} to="/settings" activeClassName={s.active}>Settings</NavLink>
        </li></div>
  );
};

export default NavBar;