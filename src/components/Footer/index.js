import React from 'react';

import './footer.scss';

const Footer = () => (
  <footer className="footer" id="footer">
    <h2 className="footer-title">Liens</h2>
    <div className="footer-links">
      <a href="https://www.linkedin.com/in/massimo-rosas/" target="_blank" rel="noreferrer"><i className="devicon-linkedin-plain footer-logo" /> </a>
      <a href="https://github.com/MassimoRosas" target="_blank" rel="noreferrer"><i className="devicon-github-original footer-logo" /> </a>
      <a href="mailto:massimo.rosas@outlook.fr"><i className="fas fa-at footer-logo" /> </a>
    </div>
  </footer>
);

export default Footer;
