export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  achievements: readonly string[];
}

export interface Project {
  name: string;
  description: string;
  github: string;
  demo: string;
  technologies: readonly string[];
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface HeroProps {
  name: string;
  title: string;
  description: string;
}

export interface AboutProps {
  description: string;
  techStack: readonly string[];
}

export interface ExperienceProps {
  experiences: readonly ExperienceItem[];
}

export interface ProjectsProps {
  projects: readonly Project[];
}

export interface ContactProps {
  email: string;
  socialLinks: readonly SocialLink[];
  message: string;
} 