import React from 'react';
import s from './NavBar.module.css';
import Friends from "./frineds/Friends";
import NavMenu from "./NavMenu/NavMenu";

const NavBar = (props) => {
  return (
    <nav className={s.nav}>
      <NavMenu navMenu={props.state.menu} />
      <Friends friends={props.state.friends}/>
    </nav>
  );
}

export default NavBar;