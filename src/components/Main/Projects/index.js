import React from 'react';

import firstProjects from 'src/data/firstProjects';
import secondProjects from 'src/data/secondProjects';

import './projects.scss';
import FeelBetter from '../../../assets/images/FeelBetter.png';

const Projects = () => (
  <section className="main-section main-section-projects" id="projects">
    <h2 className="projects-title">Projets</h2>
    <div className="projects-container">
      {/* Projet Feel Better */}
      <div className="projects-highlight card">
        <img className="projects-highlight-preview" src={FeelBetter} alt="Aperçu Feel Better" />
        <div className="projects-highlight-description">
          <h3 className="projects-highlight-description-title">Feel Better</h3>
          <h4 className="projects-highlight-description-subtitle">Projet de fin de formation en groupe de 5 personnes (3 Front, 2 Back)</h4>
          <p className="projects-highlight-description-single">Générateur d'idées d'activités en fonction de l'humeur, avec possibilité de suivre son évolution dans le temps</p>
          <p className="projects-highlight-description-single">React + Symfony</p>
          <p className="projects-highlight-description-single">Utilisation de :</p>
          <ul className="projects-highlight-description-list">
            <li className="projects-highlight-description-list-item">Redux pour la gestion du state</li>
            <li className="projects-highlight-description-list-item">styled-components pour la gestion du thème light/dark, et couleur d'accentuation en fonction d'une humeur choisie (chromothérapie)</li>
            <li className="projects-highlight-description-list-item">react-router pour la gestion du routing de l'application</li>
            <li className="projects-highlight-description-list-item">react-calendar pour avoir un suivi de son humeur sur le temps, ainsi que des activités choisies</li>
            <li className="projects-highlight-description-list-item">mocha et chai pour les tests unitaires</li>
          </ul>
        </div>
        <iframe className="projects-highlight-video" src="https://www.youtube.com/embed/sSp3eACAeU0?start=2365" title="Présentation YouTube Feel Better" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      {/* 1ère liste de projets */}
      <div className="projects-list-container">
        <ul className="projects-list">
          {firstProjects.map((project) => (
            <li key={project.name} className="projects-list-item card">
              <a className="projects-list-item-link" href={project.link} target="_blank" rel="noreferrer"><img className="projects-list-item-preview" src={project.src} alt={project.alt} /></a>
              <h3 className="projects-list-item-title">{project.name}</h3>
            </li>
          ))}
        </ul>
      </div>
      {/* 2ème liste de projets */}
      <div className="projects-list-container">
        <ul className="projects-list">
          {secondProjects.map((project) => (
            <li key={project.name} className="projects-list-item card">
              <a className="projects-list-item-link" href={project.link} target="_blank" rel="noreferrer"><img className="projects-list-item-preview" src={project.src} alt={project.alt} /></a>
              <h3 className="projects-list-item-title">{project.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Projects;
