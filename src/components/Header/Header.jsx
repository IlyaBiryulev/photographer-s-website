import './Header.css'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header() {
  const [isBurgerClick, setBurgerClick] = useState(false);

  const location = useLocation();

  const handleBurgerClick = () => {
    if(!isBurgerClick) {
      setBurgerClick(true)
    } else {
      setBurgerClick(false)
    }
  }

  const header = () => {
    if (location.pathname === '/') {
      return('header');
    }
    if (location.pathname === '/contacts') {
      return('header');
    }
    if (location.pathname === '/portfolio' || '/about-me') {
      return ('header header_dark-theme')
    }
  }

  return (
    <div>
      <header className={header()}>
        <div className="header__logo"></div>
        <div className='header__burger-btn'>
          <input className="header__checkbox" type="checkbox" onClick={handleBurgerClick}/>
          <div className="header__burger-lines">
            <span className="header__burger-line header__burger-line_first"></span>
            <span className="header__burger-line header__burger-line_second"></span>
            <span className="header__burger-line header__burger-line_third"></span>
          </div>
        </div>
        <div className='header__navbar'>
          <NavBar />
        </div>
        <BurgerMenu
          isOpen={isBurgerClick}
        />
      </header>
    </div>
  );
}

export default Header;
