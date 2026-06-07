export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    name: 'Backend & APIs',
    skills: ['Python', 'Node.js', 'PHP', 'REST APIs', 'TCP/IP'],
  },
  {
    name: 'Embedded & Hardware',
    skills: ['C', 'I2C', 'SPI', 'UART', 'LIN', 'CAN', 'PCB Design', 'Circuit Design', 'Embedded Systems', 'PLC'],
  },
  {
    name: 'Testing & Quality',
    skills: ['Docker', 'Jenkins', 'Software Quality', 'LabVIEW', 'Jira', 'CI/CD'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Git', 'Linux', 'Vite'],
  },
];
