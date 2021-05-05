import React from 'react';

import './skills.scss';

const Skills = () => (
  <section className="main-section main-section-skills" id="skills">
    <h2 className="skills-title">Compétences</h2>
    <ul className="skills-list">
      <li className="skills-list-item card"><i className="devicon-html5-plain skills-list-item-icon" /><span className="skills-list-item-description">HTML5</span></li>
      <li className="skills-list-item card"><i className="devicon-css3-plain skills-list-item-icon" /><span className="skills-list-item-description">CSS3</span></li>
      <li className="skills-list-item card"><i className="devicon-sass-original skills-list-item-icon" /><span className="skills-list-item-description">Sass</span></li>
      <li className="skills-list-item card"><i className="devicon-bootstrap-plain skills-list-item-icon" /><span className="skills-list-item-description">Bootstrap</span></li>
      <li className="skills-list-item card"><i className="devicon-javascript-plain skills-list-item-icon" /><span className="skills-list-item-description">JavaScript</span></li>
      <li className="skills-list-item card"><i className="devicon-react-original skills-list-item-icon" /><span className="skills-list-item-description">React</span></li>
      <li className="skills-list-item card"><i className="devicon-redux-original skills-list-item-icon" /><span className="skills-list-item-description">Redux</span></li>
      <li className="skills-list-item card"><i className="devicon-nodejs-plain skills-list-item-icon" /><span className="skills-list-item-description">Node.js</span></li>
      <li className="skills-list-item card"><i className="devicon-express-original skills-list-item-icon" /><span className="skills-list-item-description">Express</span></li>
      <li className="skills-list-item card"><i className="devicon-mongodb-plain skills-list-item-icon" /><span className="skills-list-item-description">MongoDB</span></li>
      <li className="skills-list-item card"><i className="devicon-php-plain skills-list-item-icon" /><span className="skills-list-item-description">PHP</span></li>
      <li className="skills-list-item card"><i className="devicon-laravel-plain skills-list-item-icon" /><span className="skills-list-item-description">Laravel</span></li>
      <li className="skills-list-item card"><i className="devicon-mysql-plain skills-list-item-icon" /><span className="skills-list-item-description">MySQL</span></li>
      <li className="skills-list-item card"><i className="devicon-git-plain skills-list-item-icon" /><span className="skills-list-item-description">Git</span></li>
      <li className="skills-list-item card"><i className="devicon-github-original skills-list-item-icon" /><span className="skills-list-item-description">GitHub</span></li>
    </ul>
  </section>
);

export default Skills;
