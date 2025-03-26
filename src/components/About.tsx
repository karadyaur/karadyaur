import React from 'react';
import { AboutProps } from '../types';

const About: React.FC<AboutProps> = ({ description, techStack }) => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>{description}</p>
          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 