import React from 'react';

import './skills.scss';

const Skills = () => (
  <section className="main-section main-section-skills">
    <h2 className="skills-title">Compétences</h2>
    <ul className="skills-list">
      <li className="skills-list-item"><i className="devicon-html5-plain" /><span className="skills-list-item-description">HTML5</span></li>
      <li className="skills-list-item"><i className="devicon-css3-plain" /><span className="skills-list-item-description">CSS3</span></li>
      <li className="skills-list-item"><i className="devicon-sass-original" /><span className="skills-list-item-description">Sass</span></li>
      <li className="skills-list-item"><i className="devicon-bootstrap-plain" /><span className="skills-list-item-description">Bootstrap</span></li>
      <li className="skills-list-item"><i className="devicon-javascript-plain" /><span className="skills-list-item-description">JavaScript</span></li>
      <li className="skills-list-item"><i className="devicon-react-original" /><span className="skills-list-item-description">React</span></li>
      <li className="skills-list-item"><i className="devicon-redux-original" /><span className="skills-list-item-description">Redux</span></li>
      <li className="skills-list-item"><i className="devicon-nodejs-plain" /><span className="skills-list-item-description">Node.js</span></li>
      <li className="skills-list-item"><i className="devicon-express-original" /><span className="skills-list-item-description">Express</span></li>
      <li className="skills-list-item"><i className="devicon-mongodb-plain" /><span className="skills-list-item-description">MongoDB</span></li>
      <li className="skills-list-item"><i className="devicon-php-plain" /><span className="skills-list-item-description">PHP</span></li>
      <li className="skills-list-item"><i className="devicon-laravel-plain" /><span className="skills-list-item-description">Laravel</span></li>
      <li className="skills-list-item"><i className="devicon-mysql-plain" /><span className="skills-list-item-description">MySQL</span></li>
      <li className="skills-list-item"><i className="devicon-git-plain" /><span className="skills-list-item-description">Git</span></li>
      <li className="skills-list-item"><i className="devicon-github-original" /><span className="skills-list-item-description">GitHub</span></li>
    </ul>
  </section>
);

export default Skills;
