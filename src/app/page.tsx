import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <Header />
      <About />
      <Projects />
    </main>
  );
}