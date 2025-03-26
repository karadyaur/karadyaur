import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import '../styles/Footer.css';

interface FooterProps {
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {name}
            </a>
          ))}
        </div>
        <p className="copyright">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer; 