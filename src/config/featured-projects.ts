import frontendDemoGif from '../../assets/frontend-demo.gif';
import kvstoreImage from '../../assets/kvstore.png';
import { FeaturedProject } from "../types";

export const featuredProjects: FeaturedProject[] = [
  {
    name: "kvstore",
    title: "Distributed Key Value Store",
    description:
      "Distributed systems flagship project implementing full Raft consensus in Python.",
    highlights: [
      "Implemented leader election, log replication, snapshotting, and write-ahead logging with Python asyncio.",
      "Added a FastAPI HTTP and RPC layer plus containerized local cluster deployment.",
      "Tested failure and recovery scenarios on a 3-node Kubernetes cluster.",
    ],
    techTags: ["Python", "Raft", "FastAPI", "Docker", "Kubernetes"],
    imgUrl: kvstoreImage,
  },
  {
    name: "http-server",
    title: "HTTP Server",
    description:
      "Systems-focused C project showing protocol handling, concurrency, and low-level networking fundamentals.",
    highlights: [
      "Implemented HTTP/1.1 request parsing and persistent keep-alive connections.",
      "Served static files with non-blocking I/O and concurrent client handling.",
      "Built directly on Linux socket primitives instead of higher-level frameworks.",
    ],
    techTags: ["C", "HTTP/1.1", "Non-blocking I/O", "Linux sockets"],
  },
  {
    name: "fastapi-mongo-movies",
    title: "Full Stack Movie App",
    description:
      "Breadth project demonstrating API design, frontend integration, and product-style CRUD workflows.",
    highlights: [
      "Built a FastAPI backend with search, filtering, and CRUD operations.",
      "Integrated a React frontend and containerized the app with Docker.",
      "Added metrics capture for response times and rate limits.",
    ],
    techTags: ["Python", "FastAPI", "MongoDB", "React", "Docker"],
    imgUrl: frontendDemoGif,
  },
];
