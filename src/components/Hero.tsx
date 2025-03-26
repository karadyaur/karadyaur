import React from 'react';
import { HeroProps } from '../types';

const Hero: React.FC<HeroProps> = ({ name, title, description }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm {name}</h1>
        <p className="hero-subtitle">{title}</p>
        <div className="hero-description">
          {description}
        </div>
        <div className="hero-buttons">
          <a href="#projects" className="cta-button">View My Work</a>
          <a href="#contact" className="cta-button secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 