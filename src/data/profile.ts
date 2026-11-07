import type { ImageMetadata } from "astro"
import kvstoreImage from "../assets/kvstore.png"
import moviesDemo from "../assets/frontend-demo.gif"

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

export interface Project {
  slug: string
  repo: string
  title: string
  kicker: string
  summary: string
  highlights: string[]
  tags: string[]
  image?: ImageMetadata
}

export interface SideProject {
  repo: string
  title: string
  summary: string
  lang: string
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

export const projects: Project[] = [
  {
    slug: "kvstore",
    repo: "kvstore",
    title: "Distributed Key-Value Store",
    kicker: "Distributed systems",
    summary:
      "A fault-tolerant KV store implementing the full Raft consensus protocol in Python, " +
      "from leader election through snapshotting.",
    highlights: [
      "Leader election, log replication, snapshotting, and write-ahead logging on asyncio",
      "FastAPI HTTP + RPC layer with a containerized local cluster",
      "Failure and recovery scenarios exercised on a 3-node Kubernetes cluster",
    ],
    tags: ["Python", "Raft", "asyncio", "FastAPI", "Kubernetes"],
    image: kvstoreImage,
  },
  {
    slug: "http-server",
    repo: "http-server",
    title: "HTTP/1.1 Server in C",
    kicker: "Systems programming",
    summary:
      "A from-scratch web server on raw Linux sockets covering protocol parsing, " +
      "connection reuse, and concurrency without a framework in sight.",
    highlights: [
      "HTTP/1.1 request parsing with persistent keep-alive connections",
      "Static file serving with non-blocking I/O and concurrent clients",
      "Built directly on Linux socket primitives",
    ],
    tags: ["C", "HTTP/1.1", "Non-blocking I/O", "Linux"],
  },
  {
    slug: "fastapi-mongo-movies",
    repo: "fastapi-mongo-movies",
    title: "Full-Stack Movie App",
    kicker: "Product engineering",
    summary:
      "An end-to-end app with a FastAPI + MongoDB API, a React frontend, and " +
      "request metrics baked in.",
    highlights: [
      "Search, filtering, and CRUD over a FastAPI backend",
      "React frontend, containerized with Docker",
      "Response-time and rate-limit metrics capture",
    ],
    tags: ["Python", "FastAPI", "MongoDB", "React", "Docker"],
    image: moviesDemo,
  },
]

export const sideProjects: SideProject[] = [
  {
    repo: "alpha_engine",
    title: "alpha_engine",
    summary: "Wolfenstein-style raycasting engine in C + SDL2",
    lang: "C",
  },
  {
    repo: "kshell",
    title: "kshell",
    summary: "Custom Unix shell with command history",
    lang: "C",
  },
  {
    repo: "proto",
    title: "proto",
    summary: "Terminal text editor written from scratch",
    lang: "C",
  },
  {
    repo: "otd",
    title: "otd",
    summary: "Password vault built on libsodium",
    lang: "C",
  },
  {
    repo: "pygit",
    title: "pygit",
    summary: "Minimal Git implementation for learning internals",
    lang: "Python",
  },
  {
    repo: "pychat",
    title: "pychat",
    summary: "Real-time TCP chat server and client on asyncio",
    lang: "Python",
  },
]

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
