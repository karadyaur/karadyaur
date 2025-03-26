import { ExperienceItem, Project, SocialLink } from '../types';

export const portfolioConfig = {
  hero: {
    name: 'Karadyaur',
    title: 'Full Stack Developer',
    description: 'I build things for the web and create amazing digital experiences'
  },

  about: {
    description: `I'm a passionate developer with expertise in building modern web applications.
      I love creating elegant solutions to complex problems and am constantly
      learning new technologies to stay at the forefront of web development.`,
    techStack: ['Golang', 'React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS']
  },

  experiences: [
    {
      date: 'June 2023 - February 2025',
      title: 'Full Stack Developer',
      company: 'CyberCraft Inc.',
      achievements: [
        'Led development of key features',
        'Mentored junior developers',
        'Implemented best practices'
      ]
    },
    {
      date: 'August 2023 - March 2023',
      title: 'Software Developer',
      company: 'Company Name',
      achievements: [
        'Led development of key features',
        'Mentored junior developers',
        'Implemented best practices'
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      name: 'Project Name',
      description: 'Project description goes here. Explain what you built and what technologies you used.',
      github: '#',
      demo: '#',
      technologies: ['React', 'TypeScript', 'Node.js']
    }
  ] as Project[],

  contact: {
    email: 'alexander.karadyaur@gmail.com',
    message: "I'm currently open to new opportunities and collaborations.",
    socialLinks: [
      { name: 'GitHub', url: '#' },
      { name: 'LinkedIn', url: '#' },
      { name: 'Twitter', url: '#' }
    ] as SocialLink[]
  }
} as const; 