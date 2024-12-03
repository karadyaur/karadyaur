
import { useState, useEffect } from 'react';

export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [isMouseNearTop, setIsMouseNearTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsMouseNearTop(e.clientY < 80);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition < 950) {
        setActiveSection('home');
      } else {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id || 'home');
          }
        });
      }

      setIsVisible(scrollPosition <= 100 || isMouseNearTop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMouseNearTop]);

  return { activeSection, isVisible, setIsMouseNearTop };
};