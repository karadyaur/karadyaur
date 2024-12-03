"use client"

import Link from 'next/link';
import { useNavigation } from '../hooks/useNavigation';
import { scrollToSection } from '../utils/scroll';

const Navigation = () => {
  const { activeSection, isVisible, setIsMouseNearTop } = useNavigation();

  const links = [
    { href: '/', label: 'Home', section: 'home' },
    { href: '#about', label: 'About', section: 'about' },
    { href: '#projects', label: 'Projects', section: 'projects' },
    { href: '#contact', label: 'Contact', section: 'contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <div 
      className="fixed w-full h-20 top-0 z-50 mt-5 hidden md:block"
      onMouseLeave={() => setIsMouseNearTop(false)}
    >
      <nav className={`w-full px-4 sm:px-6 lg:px-8 flex justify-center transition-all duration-500
        ${isVisible ? 'top-4' : '-top-20'} absolute`}>
        <div className="bg-[#fbfbfb] backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center space-x-4">
            {links.map(({ href, label, section }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`text-neutral-700 hover:text-black px-2 py-1 text-sm transition-colors duration-300
                  ${activeSection === section ? 'font-bold' : 'font-medium'}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;