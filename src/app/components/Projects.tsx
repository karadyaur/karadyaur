interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "Keep-git",
    description: "Description of project 1 and its features.",
    technologies: ["Python", "OpenAI API"],
  },
  {
    title: "From-O-to-Ship",
    description: "Description of project 2 and its features.",
    technologies: ["Golang", "Docker", "gRPC"],
  },
  {
    title: "Personal Website",
    description: "Description of project 3 and its features.",
    technologies: ["NextJS", "Tailwind CSS", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-neutral-800 rounded-lg overflow-hidden">
              <div className="aspect-video bg-neutral-700" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-neutral-400 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-neutral-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}