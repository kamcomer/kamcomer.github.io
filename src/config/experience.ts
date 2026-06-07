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
    id: '5',
    title: 'Software Engineer (Automation & Quality)',
    company: 'Synfinii',
    period: 'Apr 2023 – Oct 2025',
    description: 'Built and owned automated testing for three enterprise financial services deployments, developing a Docker-based test platform integrated into CI/CD pipelines that cut regression time from days to hours.',
    type: 'work',
    technologies: ['Docker', 'Python', 'Jenkins'],
  },
  {
    id: '6',
    title: 'Software Engineer (Embedded Tooling & Systems)',
    company: 'Gentex Corporation',
    period: 'Dec 2020 – Jun 2024',
    description: 'Led embedded software validation for automotive systems across multiple OEMs, verifying bus integrity across I2C, SPI, UART, LIN, and CAN protocols. Pioneered fuzz testing for Bluetooth and Wi-Fi, and improved internal PHP/LabVIEW test tooling with Jira integration.',
    type: 'work',
    technologies: ['Software Quality', 'TCP/IP', 'I2C', 'SPI', 'UART', 'LIN', 'CAN', 'PHP', 'LabVIEW', 'Jira', 'Bluetooth', 'Wi-Fi'],
  },
  {
    id: '7',
    title: 'Electrical Engineering Co-op',
    company: 'Magna International',
    period: 'Nov 2017 – Jan 2020',
    description: 'Conducted design validation testing (Thermal, ESD, EMC, Photometric, BCI) and designed PCBs for product functionality validation across automotive lighting and motor modules for major OEMs.',
    type: 'work',
    technologies: ['PCB Design', 'Circuit Design'],
  },
  {
    id: '8',
    title: 'Controls Engineer Intern',
    company: 'Dematic',
    period: 'Apr 2017 – Oct 2017',
    description: 'Calibrated and tested control modules for conveyor systems at project sites, ensuring proper functionality and system integration.',
    type: 'work',
    technologies: ['PLC', 'Conveyor Systems'],
  },
  {
    id: '3',
    title: "Bachelor's Degree in Electrical Engineering",
    company: 'Grand Valley State University',
    period: '2015 – 2020',
    description: 'Comprehensive electrical engineering curriculum covering circuit theory, electronics, digital systems, signals and processing, electromagnetics, and control systems. Coursework emphasized embedded system design, including microcontroller programming, real-time systems, and hardware-software integration alongside traditional analog and digital circuit design.',
    type: 'education',
    technologies: ['Circuit Design', 'Embedded Systems', 'Digital Signal Processing', 'Control Systems'],
  },
];
