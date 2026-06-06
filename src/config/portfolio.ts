// Portfolio configuration
// This file contains user-specific settings for the portfolio

type BootLineType = 'info' | 'success' | 'error' | 'input';

interface BootLine {
  text: string;
  delay: number;
  type: BootLineType;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'project';
  technologies?: string[];
}

export const PortfolioConfig: {
  name: string;
  title: string;
  location: string;
  tagline: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  terminal: {
    bootMessages: BootLine[];
    asciiBanner: string;
    aboutContent: string[];
  };
  experiences: Experience[];
} = {
  // Personal Info
  name: 'Kameron Comer',
  title: 'Full-Stack Developer',
  location: 'Grand Rapids, MI',
  tagline: 'Full-Stack Developer',

  // Social Links (usernames, not full URLs)
  social: {
    github: 'syntaxDuck',
    linkedin: 'kameroncomer',
    email: 'hello@example.com',
  },

  // Terminal Config
  terminal: {
    bootMessages: [
      { text: 'PORTFOLIO OS v1.0.0', delay: 0, type: 'info' },
      { text: 'Booting system...', delay: 200, type: 'info' },
      { text: 'Checking memory... OK', delay: 600, type: 'success' },
      { text: 'Loading kernel... OK', delay: 1000, type: 'success' },
      { text: 'Initializing graphics... OK', delay: 1400, type: 'success' },
      { text: 'Mounting filesystem... OK', delay: 1800, type: 'success' },
      { text: 'Loading hero effects module... OK', delay: 2200, type: 'success' },
      { text: 'Brewing coffee... OK', delay: 2400, type: 'success' },
      { text: 'Purging cache... OK', delay: 2600, type: 'success' },
      { text: 'Loading sense of humor... OK', delay: 2800, type: 'success' },
      { text: 'Starting terminal service... OK', delay: 3000, type: 'success' },
      { text: 'Convincing compiler to cooperate... OK', delay: 3400, type: 'success' },
      { text: 'Loading motivation... OK', delay: 3800, type: 'success' },
      { text: 'Initializing will to live... OK', delay: 4200, type: 'success' },
      { text: 'Establishing connection... OK', delay: 4600, type: 'success' },
      { text: '', delay: 5000, type: 'info' },
      { text: 'localhost login: visitor', delay: 5200, type: 'input' },
      { text: 'Password: ********', delay: 5600, type: 'info' },
      { text: '', delay: 6000, type: 'info' },
      { text: 'Welcome to Portfolio OS v1.0.0', delay: 6400, type: 'success' },
      { text: 'Type "help" for available commands.', delay: 6600, type: 'info' },
    ],
    asciiBanner: `██╗  ██╗ █████╗ ███╗   ███╗███████╗██████╗  ██████╗ ███╗   ██╗
██║ ██╔╝██╔══██╗████╗ ████║██╔════╝██╔══██╗██╔═══██╗████╗  ██║
████╔╝  ███████║██╔████╔██║█████╗  ██████╔╝██║   ██║██╔██╗ ██║
██╔═██╗ ██╔══██║██║╚██╔╝██║██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║
██║  ██╗██║  ██║██║ ╚═╝ ██║███████╗██║  ██║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
                                                           
 ██████╗ ██████╗ ███╗   ███╗███████╗██████╗                    
██╔════╝██╔═══██╗████╗ ████║██╔════╝██╔══██╗                  
██║     ██║   ██║██╔████╔██║█████╗  ██████╔╝                  
██║     ██║   ██║██║╚██╔╝██║██╔══╝  ██╔══██╗                  
╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗██║  ██║                  
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝`,
    aboutContent: [
      '',
      'Full-Stack Developer',
      '',
      'Type "help" for commands or scroll down to explore.',
      '',
      '↓ Scroll to explore',
    ],
  },

  // Experience
  experiences: [
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
  ],
};
