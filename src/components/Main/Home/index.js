import React from 'react';

import './home.scss';
import avatar from '../../../assets/images/avatar.png';

const Home = () => (
  <section className="main-section main-section-home">
    <div className="home-description">
      <h1 className="home-title">Massimo Rosas</h1>
      <h3 className="home-subtitle">Développeur Frontend</h3>
      <p className="home-paragraph">React</p>
    </div>
    <img className="home-avatar" src={avatar} alt="Massimo" />
  </section>
);

export default Home;
