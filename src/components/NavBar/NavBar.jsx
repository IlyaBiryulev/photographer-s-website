import React from 'react';
import './NavBar.css'
import { NavLink, useLocation } from 'react-router-dom';

function NavBar () {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li ><NavLink to="/" className={`navbar__menu-link ${location.pathname === '/' ?  'navbar__menu-link_active' : ''}`}>ГЛАВНАЯ</NavLink></li>
        <li><NavLink to="/portfolio" className={`navbar__menu-link ${location.pathname === '/portfolio' ?  'navbar__menu-link_active' : ''}`}>ПОРТФОЛИО</NavLink></li>
        <li><NavLink to="/about-me" className={`navbar__menu-link ${location.pathname === '/about-me' ?  'navbar__menu-link_active' : ''}`}>О СЕБЕ</NavLink></li>
        <li><NavLink to="/contacts" className={`navbar__menu-link ${location.pathname === '/contacts' ?  'navbar__menu-link_active' : ''}`}>КОНТАКТЫ</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;
