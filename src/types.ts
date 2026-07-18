export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  tags: string[];
  keyFeatures: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  type: 'college' | 'school';
}

export interface SkillCategory {
  id: string;
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  location: string;
  period?: string;
  highlights: string[];
}
