import React from 'react';
import s from './../../NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavMenuItem = (props) => {
  return (
    <li className={s.mainNav__item}>
      <NavLink className={s.mainNav__link} to={props.link} activeClassName={s.active}>
          {props.name}
        </NavLink>
      </li>
    // <div>
    //     <li className={s.mainNav__item}>
    //       <NavLink className={s.mainNav__link} to="/profile" activeClassName={s.active}>
    //         Profile
    //       </NavLink>
    //     </li>
    //     <li className={s.mainNav__item}>
    //       <NavLink className={s.mainNav__link} to="/dialogs" activeClassName={s.active}>Messages</NavLink>
    //     </li>
    //     <li className={s.mainNav__item}>
    //       <NavLink className={s.mainNav__link} to="/news" activeClassName={s.active}>News</NavLink>
    //     </li>
    //     <li className={s.mainNav__item}>
    //       <NavLink className={s.mainNav__link} to="/music" activeClassName={s.active}>Music</NavLink>
    //     </li>
    //     <li className={s.mainNav__item}>
    //       <NavLink className={s.mainNav__link} to="/settings" activeClassName={s.active}>Settings</NavLink>
    //     </li></div>
  );
}

export default NavMenuItem;