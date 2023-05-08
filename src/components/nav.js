import React from 'react';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? 'font-bold' : '';

function Nav() {
  return (
    <div>
    <nav className="header-menu">
      <NavLink className={setActive} to='/'> <span className="pr-4 font-size color-black" >Головна</span> </NavLink>
      <NavLink className={setActive} to="/Shop"> <span className="pr-4 font-size color-black" >Магазин</span> </NavLink>
      <NavLink className={setActive} to="/Blog"> <span className="pr-4 font-size color-black" >Блог</span> </NavLink>
      <NavLink className={setActive} to="/Condition"> <span className="pr-4 font-size color-black" >Умови</span> </NavLink>
      <NavLink className={setActive} to="/Contacts"> <span className="pr-4 font-size color-black" >Контакти</span> </NavLink> 
      </nav>
      </div>
  );  
}

export default Nav;