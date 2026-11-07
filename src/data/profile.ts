export { projects, sideProjects } from "./projects"
export type { Project, SideProject } from "./projects"

export interface Profile {
  name: string
  role: string
  location: string
  /** Flip to false when not looking; drives the status badge in the hero */
  openToWork: boolean
  headline: string
  tagline: string
  bio: string[]
  focus: string[]
}

export interface Social {
  github: string
  linkedin: string
  email: string
}

export interface SkillGroup {
  name: string
  code: string
  skills: string[]
  /** Repos or roles that back these skills up */
  proof: string[]
}

export interface Role {
  title: string
  company: string
  start: string
  end: string
  summary: string
  tech: string[]
  kind: "work" | "education"
}

export const profile: Profile = {
  name: "Kameron Comer",
  role: "Software Engineer",
  location: "Remote, US",
  openToWork: true,
  headline: "I build the systems underneath the product.",
  tagline:
    "Backend services, platform tooling, and embedded-adjacent engineering, built to stay up and easy to reason about.",
  bio: [
    "I build backend services, internal platforms, and low-level systems with a focus on " +
      "reliability, observability, and ownership across the full delivery cycle.",
    "My background blends Python platform work, embedded validation across automotive " +
      "protocols, and simulation tooling used to validate image recognition systems for " +
      "automotive safety, which gave me a deep respect for systems that have to work every time.",
    "I'm currently pursuing an M.S. in Electrical and Computer Engineering at Purdue University.",
  ],
  focus: ["Distributed systems", "Platform & test infra", "Embedded tooling"],
}

export const social: Social = {
  github: "kamcomer",
  linkedin: "kameron-comer",
  email: "kameroncomer@gmail.com",
}

export const links = {
  github: `https://github.com/${social.github}`,
  linkedin: `https://www.linkedin.com/in/${social.linkedin}`,
  email: `mailto:${social.email}`,
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Core Languages",
    code: "LANG",
    skills: ["Python", "C / C++", "TypeScript", "SQL", "PHP"],
    proof: ["kvstore", "http-server", "kshell"],
  },
  {
    name: "Backend & Platform",
    code: "PLAT",
    skills: ["FastAPI", "REST / RPC", "Async I/O", "Jenkins CI", "Observability"],
    proof: ["Synfinii", "fastapi-mongo-movies"],
  },
  {
    name: "Infrastructure & Data",
    code: "INFR",
    skills: ["Docker", "Kubernetes", "Linux", "MS SQL", "pandas / NumPy"],
    proof: ["kvstore", "Gentex"],
  },
  {
    name: "Embedded Systems",
    code: "EMBD",
    skills: ["CAN / LIN", "UDS", "SPI / I2C / UART", "HIL tooling", "PCB bring-up"],
    proof: ["Gentex", "Magna"],
  },
]

export const roles: Role[] = [
  {
    title: "M.S. Electrical and Computer Engineering",
    company: "Purdue University",
    start: "2026",
    end: "Present",
    summary: "Graduate study in electrical and computer engineering, started September 2026.",
    tech: [],
    kind: "education",
  },
  {
    title: "Software Engineer, Automation & Quality",
    company: "Synfinii",
    start: "2023",
    end: "2025",
    summary:
      "Built a greenfield internal platform in Python that improved release confidence, " +
      "accelerated regression cycles, and ran large-scale automated testing across isolated " +
      "customer environments.",
    tech: ["Python", "FastAPI", "Docker Compose", "MS SQL", "Jenkins"],
    kind: "work",
  },
  {
    title: "Software Engineer, Embedded Tooling & Systems",
    company: "Gentex Corporation",
    start: "2020",
    end: "2024",
    summary:
      "Built validation and simulation tooling for automotive safety systems, including " +
      "image-recognition validation, protocol-level debugging, and firmware hardening across " +
      "safety-critical interfaces.",
    tech: ["C", "HIL", "CAN", "LIN", "SPI", "I2C", "Kubernetes"],
    kind: "work",
  },
  {
    title: "Electrical Engineering Co-op",
    company: "Magna International",
    start: "2017",
    end: "2020",
    summary:
      "Validated automotive hardware under environmental and electrical stress and built " +
      "PCB-based test fixtures for product verification.",
    tech: ["PCB Design", "Circuit Design"],
    kind: "work",
  },
  {
    title: "Controls Engineer Intern",
    company: "Dematic",
    start: "2017",
    end: "2017",
    summary:
      "Tested and calibrated conveyor control modules on site for industrial automation " +
      "deployments.",
    tech: ["PLC", "Controls"],
    kind: "work",
  },
  {
    title: "B.S. Electrical Engineering",
    company: "Grand Valley State University",
    start: "2015",
    end: "2020",
    summary:
      "Embedded systems, controls, DSP, and hardware-software integration.",
    tech: ["Embedded", "DSP", "Controls"],
    kind: "education",
  },
]

export const yearsShipping = new Date().getFullYear() - 2020
