import React from 'react';
import s from './../NavBar.module.css';
import NavMenuItem from "./NavMenuItem/NavMenuItem";

const NavMenu = (props) => {
  let leftSideNav = props.navMenu.map( item => <NavMenuItem link={item.link} name={item.name} />);
  return (
    <nav className={s.nav}>
      <ul className={s.mainNav}>
        {leftSideNav}
      </ul>
    </nav>
  );
}

export default NavMenu;