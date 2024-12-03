interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Keep-git",
    description: "AI-powered Git commit message generator that helps developers write meaningful and consistent commit messages.",
    technologies: ["Python", "OpenAI API"],
    imageUrl: "/keep-git-img.png",
    link: "https://github.com/karadyauran/keep-git"
  },
  {
    title: "From-O-to-Ship",
    description: "AI Developer Light is a platform that helps developers to build, train, and deploy backend services with ease.",
    technologies: ["Golang", "Docker", "gRPC", "Kafka", "PostgreSQL"],
    imageUrl: "/ai-dev.png",
    link: "https://github.com/karadyauran/ai-developer-light"
  },
  {
    title: "Personal Website",
    description: "Persenal website built with NextJS, Tailwind CSS and TypeScript.",
    technologies: ["NextJS", "Tailwind CSS", "TypeScript"],
    imageUrl: "/website.png",
    link: "https://karadiaur.dev"
  },
];

const TechStack = ({ technologies }: { technologies: string[] }) => (
  <div className="flex gap-2 flex-wrap">
    {technologies.map((tech, index) => (
      <span
        key={index}
        className="px-3 py-1 bg-neutral-700 rounded-full text-sm 
                 hover:bg-neutral-600 transition-colors duration-200"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group bg-neutral-800 rounded-lg overflow-hidden 
                  transition-all duration-300
                  hover:shadow-2xl cursor-pointer">
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      {project.imageUrl ? (
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full aspect-video object-cover"
        />
      ) : (
        <div className="aspect-video bg-neutral-700 group-hover:bg-neutral-600 
                      transition-colors duration-200" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 
                       transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-neutral-400 mb-4">{project.description}</p>
        <TechStack technologies={project.technologies} />
      </div>
    </a>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 
                       hover:text-blue-400 transition-colors duration-200">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}