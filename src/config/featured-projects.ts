import { FeaturedProject } from "../types";

export const featuredProjects: FeaturedProject[] = [
  {
    name: "raycaster",
    title: "Raycaster Engine",
    description:
      "A raycasting engine implemented in C used to render a 3D environment from a 2D map, inspired by classic games like Wolfenstein 3D",
    highlights: [
      "Implemented a raycasting algorithm to render a 3D environment from a 2D map",
      "Used SDL for graphics rendering and input handling",
      "Implemented texture mapping for walls and sprites to enhance visual fidelity",
    ],
    techTags: ["SDL", "Graphics", "Game Development"],
  },
  {
    name: "http-server",
    title: "HTTP Server",
    description:
      "A HTTP server implemented in C using sockets to handle incoming requests and serve static files to multiple clients concurrently",
    highlights: [
      "Implemented socket programming for handling incoming requests",
      "Parsed HTTP requests and generated appropriate responses based on the requested resource",
      "Supported serving static files and basic error handling",
      "Understood and implemented HTTP protocol fundamentals",
    ],
    techTags: ["POSIX sockets"],
  },
  {
    name: "kvstore",
    title: "Distributed Key Value Store",
    description:
      "A key-value store implemented in Python utilizing full RAFT consensus algorithm for distributed state management",
    highlights: [
      "Implemented leader election, log replication, and state machine application to ensure consistency across distributed nodes",
      "Utilized docker and kubernetes to containerize and orchestrate the deployment of the key-value store",
      "Implemented a simple client library to interact with the key-value store and perform basic CRUD operations",
    ],
    techTags: ["FastAPI", "Docker", "Kubernetes"],
    imgUrl: "/assets/kvstore.png",
  },
  {
    name: "fastapi-mongo-movies",
    title: "Full Stack Movie App",
    description:
      "A fullstack movie application built with React for the frontend, FastAPI for the backend, and MongoDB for the database",
    highlights: [
      "Designed layered architecture (API → Service → Repository)",
      "Built async backend handling hundreds of concurrent requests",
      "Containerized with Docker Compose",
      "Implemented search, filtering, and CRUD operations",
    ],
    techTags: ["FastAPI", "MongoDB", "React", "TypeScript", "Docker"],
    imgUrl: "/assets/frontend-demo.gif",
  },
];
