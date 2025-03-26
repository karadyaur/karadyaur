import React from 'react';
import { ContactProps } from '../types';

const Contact: React.FC<ContactProps> = ({ email, socialLinks, message }) => {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <div className="contact-content">
        <p>{message}</p>
        <div className="contact-links">
          <a href={`mailto:${email}`} className="contact-button">Email Me</a>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 