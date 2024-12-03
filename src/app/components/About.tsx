
export default function About() {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-2xl font-semibold">Hey, I'm Alex 👋🏽</h3>
          <p className="text-lg text-neutral-300">
            I'm a 20-year-old developer based in Germany, and I'm passionate about crafting digital experiences.
          </p>

          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>I'm currently improving my Golang skills on new projects.</li>
            <li>I'm working on my resume right now...</li>
            <li>Currently working on projects <a href="https://github.com/karadyauran/ai-developer-light" className="text-blue-400 hover:underline">ai-dev</a> and <a href="https://github.com/karadyauran/soul-connect" className="text-blue-400 hover:underline">soul-connect</a></li>
            <li>Reach me by email: <a href="mailto:alex.karadyaur@outlook.com" className="text-blue-400 hover:underline">alex.karadyaur@outlook.com</a></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">📦 Toolbox</h2>
          
          <div className="space-y-4">
            <p><strong>Backend Development:</strong> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Golang</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Gin</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Python</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Django</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Java</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Spring</code></p>
            
            <p><strong>Version Control:</strong> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Git</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">GitHub</code></p>
            
            <p><strong>Frontend Development:</strong> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">TypeScript</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">React</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Next.js</code></p>
            
            <p><strong>Testing:</strong> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Postman</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">JUnit</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">TestNG</code></p>
            
            <p><strong>Others:</strong> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Docker</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">NGINX</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Redis</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Kafka</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">Grafana</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">gRPC</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">sqlc</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">PostgreSQL</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">MongoDB</code> <code className="text-sm bg-neutral-800 px-1.5 py-0.5 rounded">MySQL</code></p>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">✨ Fun Facts</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>I'm interested in aviation.</li>
            <li>As a kid, I wanted to be an astronaut.</li>
            <li>I'm using Windows, MacOS and Linux.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">📫 Contact</h2>
          <p className="text-neutral-300">
            For a quick response, DM me on <a href="https://www.linkedin.com/in/karadyauran/" className="text-blue-400 hover:underline">LinkedIn</a> or <a href="https://t.me/karadyauran" className="text-blue-400 hover:underline">Telegram</a>.
          </p>
        </div>
      </div>
    </section>
  );
}