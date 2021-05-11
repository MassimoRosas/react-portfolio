import React from 'react';

import hardSkillsData from 'src/data/hardSkillsData';
import softSkillsData from 'src/data/softSkillsData';

import './skills.scss';

const Skills = () => (
  <section className="main-section main-section-skills" id="skills">
    <h2 className="skills-title">Compétences</h2>
    <ul className="skills-list">
      {hardSkillsData.map((hardSkill) => (
        <li key={hardSkill.name} className="skills-list-item card"><i className={`${hardSkill.class} skills-list-item-icon`} /><span className="skills-list-item-description">{hardSkill.name}</span></li>
      ))}
    </ul>
    <br />
    <br />
    <ul className="skills-list">
      {softSkillsData.map((softSkill) => (
        <li key={softSkill} className="skills-list-item card"><span className="skills-list-item-description">{softSkill}</span></li>
      ))}
    </ul>
  </section>
);

export default Skills;
