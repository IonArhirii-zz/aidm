import React from 'react';
import s from './../NavBar.module.css';
// import NavMenuItem from "./NavMenuItem/NavMenuItem";
import StoreContex from "../../../StoreContext";
import NavMenu from "./NavMenu";

const NavMenuContainer = () => {
  debugger;
  return (
    <StoreContex.Cosumer>
      {(store) => {
        let state = store.getState();
        // let leftSideNav = state.navMenu.map( item => <NavMenuItem link={item.link} name={item.name} />);
        return <nav className={s.nav}>
          <ul className={s.mainNav}>
            <NavMenu state={state}/>
          </ul>
        </nav>
      }}
    </StoreContex.Cosumer>
  );
}

export default NavMenuContainer;