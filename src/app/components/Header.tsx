
export default function Header() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Alex Karadiaur
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-neutral-400">
          Software Engineer & Web Developer
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors">
            Contact Me
          </a>
          <a href="#projects" className="px-6 py-3 border border-white rounded-full hover:bg-white/10 transition-colors">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}