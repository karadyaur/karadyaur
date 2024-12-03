import { InfoBlock } from '../components/about/components/InfoBlock';
import { GradientTitle } from '../components/about/components/GradientTitle';
import { ProjectLinks } from '../components/about/components/ProjectLinks';
import { ToolboxSection } from '../components/about/components/ToolboxSection';
import { FunFacts } from '../components/about/components/FunFacts';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">About Me</h2>
        <div className="prose prose-invert max-w-none space-y-8">
          <InfoBlock gradient="from-green-400 to-blue-500">
            <GradientTitle gradient="from-yellow-400 to-blue-500">Hey, I'm Alex</GradientTitle>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
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