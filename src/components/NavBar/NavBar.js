import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';

function NavBar () {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li ><NavLink to="/" className="navbar__menu-link">ГЛАВНАЯ</NavLink></li>
        <li><NavLink to="/portfolio" className="navbar__menu-link">ПОРТФОЛИО</NavLink></li>
        <li><NavLink to="/about-me" className="navbar__menu-link">О СЕБЕ</NavLink></li>
        <li><NavLink to="/contacts" className="navbar__menu-link">КОНТАКТЫ</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;
