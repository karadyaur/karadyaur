import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { portfolioConfig } from './config/portfolio';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Hero {...portfolioConfig.hero} />
      <About {...portfolioConfig.about} />
      <Experience experiences={portfolioConfig.experiences} />
      <Projects projects={portfolioConfig.projects} />
      <Contact {...portfolioConfig.contact} />
    </MainLayout>
  );
};

export default App;
