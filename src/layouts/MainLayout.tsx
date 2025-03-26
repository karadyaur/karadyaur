import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { APP_NAME } from '../constants';
import '../styles/layout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer copyrightText={`© ${new Date().getFullYear()} ${APP_NAME}. All rights reserved.`} />
    </div>
  );
};

export default MainLayout; 