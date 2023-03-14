import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar () {
  return (
    <nav className="header__menu">
      <ul className="header__list">
        <li ><NavLink to="/" className="header__menu-link">ГЛАВНАЯ</NavLink></li>
        <li><NavLink to="/portfolio" className="header__menu-link">ПОРТФОЛИО</NavLink></li>
        <li><NavLink to="/about-me" className="header__menu-link">О СЕБЕ</NavLink></li>
        <li><NavLink to="/contacts" className="header__menu-link">КОНТАКТЫ</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;