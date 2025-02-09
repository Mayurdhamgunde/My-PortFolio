export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
}

export interface Skill {
  category: string;
  technologies: string[];
}

export interface Achievement {
  title: string;
  description: string;
}