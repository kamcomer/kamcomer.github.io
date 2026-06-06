export type ExperienceType = 'work' | 'education' | 'project';

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: ExperienceType;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'Developing and maintaining web applications using modern technologies. Working with cross-functional teams to deliver high-quality software solutions.',
    type: 'work',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: '2',
    title: 'Junior Developer',
    company: 'Previous Company',
    period: '2021 - 2023',
    description: 'Built responsive web interfaces and collaborated with design teams to implement user-friendly features.',
    type: 'work',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
  },
  {
    id: '3',
    title: 'Computer Science Degree',
    company: 'University Name',
    period: '2017 - 2021',
    description: 'Studied computer science with focus on web development and software engineering principles.',
    type: 'education',
    technologies: ['Algorithms', 'Data Structures', 'Database Systems'],
  },
  {
    id: '4',
    title: 'Portfolio Website',
    company: 'Personal Project',
    period: '2024',
    description: 'Built this portfolio website from scratch using React, TypeScript, and Tailwind CSS.',
    type: 'project',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
];
