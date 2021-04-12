import React from 'react';

import './header.scss';

const Header = () => (
  <header className="header">
    <i className="header-logo devicon-react-original" />
    <h2 className="header-title">Massimo Rosas</h2>
    <nav className="header-navbar">
      <ul className="header-navbar-links">
        <li className="header-navbar-links-single">Présentation</li>
        <li className="header-navbar-links-single">Parcours</li>
        <li className="header-navbar-links-single">Compétences</li>
        <li className="header-navbar-links-single">Réalisations</li>
        <li className="header-navbar-links-single">Contact</li>
      </ul>
    </nav>
  </header>
);

export default Header;
