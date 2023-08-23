import React from 'react';
import './NavBar.css';
import { NavLink, useLocation } from 'react-router-dom';

function NavBar () {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item"><NavLink to="/" className={`navbar__menu-link ${location.pathname === '/' ?  'navbar__menu-link_active' : ''}`}>ГЛАВНАЯ</NavLink></li>
        <li className="navbar__list-item"><NavLink to="/portfolio" className={`navbar__menu-link ${location.pathname === '/portfolio' ?  'navbar__menu-link_active' : ''}`}>ПОРТФОЛИО</NavLink></li>
        <li className="navbar__list-item"><NavLink to="/filming" className={`navbar__menu-link ${location.pathname === '/filming' ?  'navbar__menu-link_active' : ''}`}>СЪЕМКИ</NavLink></li>
        <li className="navbar__list-item"><NavLink to="/contacts" className={`navbar__menu-link ${location.pathname === '/contacts' ?  'navbar__menu-link_active' : ''}`}>КОНТАКТЫ</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;
