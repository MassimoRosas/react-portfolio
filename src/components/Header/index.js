import React, { useState } from 'react';

import './header.scss';

const Header = () => {
  const [toggleNav, setToggleNav] = useState('closed');

  return (
    <header className="header">
      <div className="header-left-container">
        <i className="header-logo devicon-react-original" />
        <h2 className="header-title">Massimo Rosas</h2>
      </div>
      <nav className="header-navbar">
        <button
          type="button"
          className="menu"
          onClick={(event) => {
            event.currentTarget.classList.toggle('opened');

            if (event.currentTarget.classList.contains('opened')) {
              setToggleNav('opened');
            }
            else {
              setToggleNav('closed');
            }
          }}
          aria-label="Main Menu"
        >
          <svg className="menu-svg" width="50" height="50" viewBox="0 0 100 100">
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
        {toggleNav === 'opened'
        && (
          <ul className="header-navbar-links">
            <li className="header-navbar-links-single"><a href="#home">Présentation</a></li>
            <li className="header-navbar-links-single"><a href="#career">Parcours</a></li>
            <li className="header-navbar-links-single"><a href="#skills">Compétences</a></li>
            <li className="header-navbar-links-single"><a href="#projects">Projets</a></li>
            <li className="header-navbar-links-single"><a href="#footer">Liens</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
