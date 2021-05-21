import React from 'react';
import Fade from 'react-reveal/Fade';

import './footer.scss';

const Footer = () => (
  <footer className="footer" id="footer">
    <Fade>
      <h2 className="footer-title">Liens</h2>
    </Fade>
    <div className="footer-links">
      <Fade left>
        <a href="https://www.linkedin.com/in/massimo-rosas/" target="_blank" rel="noreferrer">
          <i className="devicon-linkedin-plain footer-logo" />
        </a>
      </Fade>
      <Fade bottom>
        <a href="https://github.com/MassimoRosas" target="_blank" rel="noreferrer">
          <i className="devicon-github-original footer-logo" />
        </a>
      </Fade>
      <Fade right>
        <a href="mailto:massimo.rosas@outlook.fr">
          <i className="fas fa-at footer-logo" />
        </a>
      </Fade>
    </div>
  </footer>
);

export default Footer;
