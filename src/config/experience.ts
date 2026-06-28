import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '5',
    title: 'Software Engineer (Automation & Quality)',
    company: 'Synfinii',
    period: 'Apr 2023 – Oct 2025',
    description: 'Built a greenfield internal platform in Python that improved release confidence, accelerated regression cycles, and supported large-scale automated testing across isolated customer environments.',
    type: 'work',
    technologies: ['Python', 'Docker Compose', 'FastAPI', 'MS SQL', 'Jenkins'],
  },
  {
    id: '6',
    title: 'Software Engineer (Embedded Tooling & Systems)',
    company: 'Gentex Corporation',
    period: 'Dec 2020 – Jun 2024',
    description: 'Built embedded validation and simulation tooling for automotive safety systems, including internal tools supporting image recognition validation, protocol-level debugging, and firmware hardening across safety-critical interfaces.',
    type: 'work',
    technologies: ['C', 'HIL', 'I2C', 'SPI', 'UART', 'LIN', 'CAN', 'PHP', 'Kubernetes'],
  },
  {
    id: '7',
    title: 'Electrical Engineering Co-op',
    company: 'Magna International',
    period: 'Nov 2017 – Jan 2020',
    description: 'Validated automotive hardware under environmental and electrical stress conditions and built PCB-based test support for product verification.',
    type: 'work',
    technologies: ['PCB Design', 'Circuit Design'],
  },
  {
    id: '8',
    title: 'Controls Engineer Intern',
    company: 'Dematic',
    period: 'Apr 2017 – Oct 2017',
    description: 'Tested and calibrated conveyor control modules on site, supporting reliable system integration for industrial automation deployments.',
    type: 'work',
    technologies: ['PLC', 'Conveyor Systems'],
  },
  {
    id: '3',
    title: "Bachelor's Degree in Electrical Engineering",
    company: 'Grand Valley State University',
    period: '2015 – 2020',
    description: 'Electrical engineering foundation with emphasis on embedded systems, controls, hardware-software integration, and mathematical problem solving.',
    type: 'education',
    technologies: ['Circuit Design', 'Embedded Systems', 'Digital Signal Processing', 'Control Systems'],
  },
];
