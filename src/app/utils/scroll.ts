
export const scrollToSection = (href: string) => {
  if (href === '/') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      });
    return;
  }

  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  
  if (element) {
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop, // Учитываем высоту навигации
      behavior: 'smooth',
    });
  }
};