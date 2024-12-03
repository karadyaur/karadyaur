import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}