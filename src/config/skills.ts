interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Core Languages",
    skills: ["Python", "C/C++", "TypeScript", "JavaScript", "SQL", "PHP"],
  },
  {
    name: "Backend & Platform",
    skills: ["FastAPI", "REST APIs", "Async I/O", "Docker Compose", "Jenkins", "Observability"],
  },
  {
    name: "Infrastructure & Data",
    skills: ["Docker", "Kubernetes", "MS SQL", "pandas", "NumPy", "Linux"],
  },
  {
    name: "Embedded Systems",
    skills: ["CAN", "UDS", "SPI/I2C", "UART", "LIN", "HIL tooling"],
  },
];
