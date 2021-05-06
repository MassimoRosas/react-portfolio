import React from 'react';

import './projects.scss';
import FeelBetter from '../../../assets/images/FeelBetter.png';
import reactConverter from '../../../assets/images/reactConverter.png';
import reactDashboard from '../../../assets/images/reactDashboard.png';
import reactGitHubApi from '../../../assets/images/reactGitHubApi.png';
import reactTodoList from '../../../assets/images/reactTodoList.png';

const Projects = () => (
  <section className="main-section main-section-projects" id="projects">
    <h2 className="projects-title">Projets</h2>
    <div className="projects-container">
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
      <div className="projects-list-container">
        <ul className="projects-list">
          <li className="projects-list-item card">
            <img className="projects-list-item-preview" src={reactConverter} alt="react-converter preview" />
            <h3 className="projects-list-item-title">React Converter</h3>
            <a className="projects-list-item-link" href="https://react-converter.vercel.app/" target="_blank" rel="noreferrer">Lien</a>
          </li>
          <li className="projects-list-item card">
            <img className="projects-list-item-preview" src={reactDashboard} alt="react-dashboard preview" />
            <h3 className="projects-list-item-title">React Social Media Dashboard</h3>
            <a className="projects-list-item-link" href="https://react-social-media-dashboard.vercel.app/" target="_blank" rel="noreferrer">Lien</a>
          </li>
          <li className="projects-list-item card">
            <img className="projects-list-item-preview" src={reactGitHubApi} alt="react-github-api preview" />
            <h3 className="projects-list-item-title">React GitHub API Search</h3>
            <a className="projects-list-item-link" href="https://react-github-api-rosy.vercel.app/" target="_blank" rel="noreferrer">Lien</a>
          </li>
          <li className="projects-list-item card">
            <img className="projects-list-item-preview" src={reactTodoList} alt="react-to-do-list preview" />
            <h3 className="projects-list-item-title">React To-Do List</h3>
            <a className="projects-list-item-link" href="https://react-todo-list-gray.vercel.app/" target="_blank" rel="noreferrer">Lien</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Projects;
