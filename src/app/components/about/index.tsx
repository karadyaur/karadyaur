
import { InfoBlock } from './components/InfoBlock';
import { GradientTitle } from './components/GradientTitle';
import { ProjectLinks } from './components/ProjectLinks';
import { ToolboxSection } from './components/ToolboxSection';
import { FunFacts } from './components/FunFacts';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="prose prose-invert max-w-none space-y-8">
          <InfoBlock gradient="from-green-400 to-blue-500">
            <GradientTitle gradient="from-green-400 to-blue-500">Hey, I'm Alex</GradientTitle>
            <p className="text-xl text-neutral-300 leading-relaxed">
              I'm a 20-year-old developer based in Germany, and I'm passionate about crafting digital experiences.
            </p>
            <ProjectLinks />
          </InfoBlock>

          <InfoBlock gradient="from-orange-400 to-red-500">
            <GradientTitle gradient="from-orange-400 to-red-500">Toolbox</GradientTitle>
            <ToolboxSection />
          </InfoBlock>

          <InfoBlock gradient="from-yellow-400 to-orange-500">
            <GradientTitle gradient="from-yellow-400 to-orange-500">Fun Facts</GradientTitle>
            <FunFacts />
          </InfoBlock>
        </div>
      </div>
    </section>
  );
}