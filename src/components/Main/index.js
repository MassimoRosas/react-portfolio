import React from 'react';

import Home from './Home';
import Career from './Career';
import Skills from './Skills';
import Projects from './Projects';
import './main.scss';

const Main = () => (
  <main className="main">
    <Home />
    <Career />
    <Skills />
    <Projects />
  </main>
);

export default Main;
