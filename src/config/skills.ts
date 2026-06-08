export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      "Python",
      "C",
      "LabVIEW",
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "SQL",
      "Bash",
    ],
  },
  {
    name: "Frontend Technologies",
    skills: ["React", "Vue", "Tailwind"],
  },
  {
    name: "Backend Technologies",
    skills: [
      "FastAPI",
      "Node.js",
      "Docker",
      "REST APIs",
      "TCP/IP",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    name: "Embedded & Hardware",
    skills: [
      "I2C",
      "SPI",
      "UART",
      "LIN",
      "CAN",
      "PCB Design",
      "Circuit Design",
    ],
  },
  {
    name: "Tools & DevOps",
    skills: ["Git", "Linux", "CI/CD", "AWS"],
  },
];
