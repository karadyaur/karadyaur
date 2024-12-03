export default function Header() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/4629650/4629650-uhd_4096_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="w-32 h-32 sm:w-48 sm:h-48 mb-4 sm:mb-6 overflow-hidden rounded-full border-4 border-white">
              <img 
                src="/resume-photo.png" 
                alt="Alex Karadiaur" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Alex Karadiaur
            </h1>
            <p className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl text-neutral-400">
              Software Engineer & Web Developer
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors">
                Contact Me
              </a>
              <a href="#projects" className="px-6 py-3 border border-white rounded-full hover:bg-white/10 transition-colors">
                View Projects
              </a>
            </div>
          </div>
        </section>
      </div>
      
      {/* Bouncing Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </header>
  );
}