import React from 'react';
import logoOclock from '../../../assets/images/logoOclock.png';
import opquastBadge from '../../../assets/images/badgeOpquast.png';

import './career.scss';

const Career = () => (
  <section className="main-section main-section-career" id="career">
    <h2 className="career-title">Parcours</h2>
    <div className="career-oclock">
      <div className="career-logo">
        <img className="career-logo-img" src={logoOclock} alt="Logo O'Clock" />
        <span className="career-logo-title">O'Clock</span>
      </div>
      <div className="career-description">
        <h3 className="career-description-title">Développement d'applications web / web-mobile (niveau Bac+2)</h3>
        <h4 className="career-description-subtitle">5 mois intensifs (700 heures) en télé-présentiel</h4>
        <p className="career-description-single">3 mois de Socle: HTML, CSS, JS, PHP, MySQL</p>
        <p className="career-description-single">1 mois de spécialisation: React</p>
        <p className="career-description-single">1 mois de projet en groupe</p>
      </div>
    </div>
    <div className="career-opquast">
      <img className="career-description-badge" src={opquastBadge} alt="Badge Opquast Confirmé" />
      <h3 className="career-description-title">Certification Opquast : "Maîtrise de la qualité en projet Web"</h3>
      <h4 className="career-description-subtitle">Certification de référence pour les métiers du Web</h4>
      <p className="career-description-single">14 heures de formation en autonomie</p>
      <p className="career-description-single">240 règles réalistes et vérifiables, validées par la communauté</p>
      <p className="career-description-single">Concerne le modèle VPTCS (Elie Sloïm et Eric Gateau) : Visibilité, Perception, Technique, Contenus, Services</p>
      <p className="career-description-result">Résultat obtenu: 860 / 1000 points</p>
    </div>
  </section>
);

export default Career;
