import React from 'react';

import './home.scss';
import avatar from '../../../assets/images/avatar.png';

const Home = () => (
  <section className="main-section main-section-home" id="home">
    <div className="home-description">
      <h1 className="home-title">Massimo Rosas</h1>
      <h3 className="home-subtitle">Développeur Frontend</h3>
      <p className="home-paragraph">React</p>
    </div>
    <img className="home-avatar" src={avatar} alt="Massimo" />
    <ul className="home-data">
      <li className="home-data-single">
        <i className="fas fa-map-marker-alt home-data-single-logo" />
        <p className="home-data-single-description">35580 Guichen</p>
      </li>
      <li className="home-data-single">
        <i className="fas fa-at home-data-single-logo" />
        <p className="home-data-single-description">massimo.rosas@outlook.fr</p>
      </li>
      <li className="home-data-single">
        <i className="fas fa-mobile-alt home-data-single-logo" />
        <p className="home-data-single-description">06.24.12.36.94</p>
      </li>
    </ul>
  </section>
);

export default Home;
