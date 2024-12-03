const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/karadyauran' },
    { name: 'LinkedIn', url: '#' },
  ];

  return (
    <footer className="py-8 bg-neutral-900 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Alex Karadiaur</p>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;