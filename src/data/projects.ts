import type { ImageMetadata } from "astro"
import kvstoreImage from "../assets/kvstore.png"
import moviesDemo from "../assets/frontend-demo.gif"

export interface Metric {
  value: string
  label: string
}

export interface Component {
  name: string
  role: string
}

/** Long-form content for /projects/[slug]; everything here is sourced from the repo README */
export interface CaseStudy {
  problem: string
  built: string[]
  architecture: Component[]
  /** Optional ASCII sketch shown beside the architecture list */
  diagram?: string
  metrics: Metric[]
  engineering: { title: string; body: string }[]
  /** Only for gaps the repo itself documents */
  next?: string[]
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
  caseStudy: CaseStudy
}

export interface SideProject {
  repo: string
  title: string
  summary: string
  lang: string
}

export const projects: Project[] = [
  {
    slug: "kvstore",
    repo: "kvstore",
    title: "Distributed Key-Value Store",
    kicker: "Distributed systems",
    summary:
      "A fault-tolerant KV store implementing Raft consensus in Python, " +
      "from leader election through durable, replicated writes.",
    highlights: [
      "Leader election, majority-based log replication, and write-ahead logging on asyncio",
      "FastAPI for both client traffic and internal node-to-node RPC",
      "Failure and recovery scenarios exercised on a 3-node Kubernetes cluster",
    ],
    tags: ["Python", "Raft", "asyncio", "FastAPI", "Kubernetes"],
    image: kvstoreImage,
    caseStudy: {
      problem:
        "Consensus is one of those topics that reads simply on paper and gets slippery the " +
        "moment real networks are involved. I wanted to understand Raft by building it end to " +
        "end, not as a toy simulation but as a store that survives restarts, partitions, and " +
        "leader loss, and that can be debugged when it doesn't.",
      built: [
        "Raft leader election with term-based role transitions (follower → candidate → leader)",
        "Majority-based write replication with append and heartbeat coordination",
        "Write-ahead log with replay for command durability across restarts",
        "Separate HTTP surfaces: a client API (/client/v1) and an internal Raft API (/internal/v1)",
        "Resilient peer transport with timeouts, retries with backoff, and structured error categories",
        "Runtime metrics per RPC type and an incident-triage runbook for election and replication issues",
      ],
      architecture: [
        { name: "raft/node.py", role: "Role state machine, replication, commit and apply" },
        { name: "raft/log.py", role: "WAL append and replay" },
        { name: "peer_http_client.py", role: "Peer RPC with timeouts, retries, structured errors" },
        { name: "api/routes/", role: "Client, internal, and node route handlers" },
        { name: "tests/integration/", role: "Multi-node, durability, and regression scenarios" },
      ],
      diagram: `  client
    │  POST /client/v1/kv
    ▼
┌────────┐  append / heartbeat  ┌──────────┐
│ LEADER │ ───────────────────▶ │ FOLLOWER │
│  WAL   │ ◀─────────────────── │   WAL    │
└────────┘       ack (term)     └──────────┘
    │                                ▲
    └──────── vote / append ─────────┘
                                ┌──────────┐
                                │ FOLLOWER │
                                └──────────┘`,
      metrics: [
        { value: "3", label: "node cluster on Kubernetes" },
        { value: "0.044s", label: "to replay a 3,000-entry log on recovery" },
        { value: "8", label: "internal Raft endpoints" },
        { value: "5", label: "categories of peer-RPC failure tracked" },
      ],
      engineering: [
        {
          title: "Make failures legible",
          body:
            "Every peer RPC failure is logged with node, peer, RPC type, attempt, and term, and " +
            "counted by category (transport, HTTP, decode, unexpected). When an election flaps, " +
            "the metrics endpoint shows which link and which RPC is misbehaving.",
        },
        {
          title: "HTTP everywhere",
          body:
            "Client and node-to-node traffic both run over FastAPI. That costs a little latency " +
            "compared to raw RPC, but every interaction is inspectable with curl and the same " +
            "middleware and metrics apply to both.",
        },
        {
          title: "Durability first",
          body:
            "Commands hit the write-ahead log before they're acknowledged, and recovery is " +
            "covered by an integration test that measures replay time on a large log.",
        },
      ],
    },
  },
  {
    slug: "http-server",
    repo: "http-server",
    title: "HTTP/1.1 Server in C",
    kicker: "Systems programming",
    summary:
      "A from-scratch web server on raw Linux sockets covering request parsing, keep-alive, " +
      "and concurrency without a framework in sight.",
    highlights: [
      "HTTP/1.1 and 1.0 parsing with client-initiated keep-alive",
      "Fork-based concurrency for simultaneous clients",
      "Path traversal protection and request size limits built in",
    ],
    tags: ["C", "HTTP/1.1", "POSIX sockets", "CMake", "Docker"],
    caseStudy: {
      problem:
        "Frameworks hide the parts of HTTP that matter most when something breaks: how bytes " +
        "become a request, how connections are reused, and how a server protects itself from " +
        "bad input. I wrote one from the socket up to own those details.",
      built: [
        "GET and HEAD handling for static files with MIME detection across 20+ types",
        "Header parsing, percent-decoding, and HTTP/1.0 + 1.1 compliance",
        "Keep-alive connections (5s timeout, up to 10 requests per connection)",
        "Fork-based concurrency with graceful SIGINT shutdown",
        "Hardening: blocks `..`, absolute paths, and hidden files; caps requests at 8 KB",
        "Structured, timestamped logging and HTML error pages for 400/403/404/500",
      ],
      architecture: [
        { name: "server.c", role: "Socket lifecycle and fork-based concurrency" },
        { name: "request.c", role: "HTTP request parsing" },
        { name: "response.c", role: "Response generation and file serving" },
        { name: "util.c", role: "MIME types, URL decoding, path safety" },
        { name: "logging.c", role: "Leveled, timestamped logging" },
      ],
      diagram: `accept() ──▶ fork()
               │
               ▼
        ┌─────────────┐   8 KB cap
        │ read request│──────────▶ 400
        └─────────────┘
               │ parse + decode
               ▼
        ┌─────────────┐   ../ hidden
        │ resolve path│──────────▶ 403
        └─────────────┘
               │ MIME lookup
               ▼
        ┌─────────────┐
        │ send file   │──▶ keep-alive? ─┐
        └─────────────┘                 │
               ▲────────────────────────┘`,
      metrics: [
        { value: "20+", label: "MIME types detected" },
        { value: "8 KB", label: "request size limit" },
        { value: "10", label: "requests per keep-alive connection" },
        { value: "0", label: "framework dependencies" },
      ],
      engineering: [
        {
          title: "Security as a default",
          body:
            "Path resolution rejects traversal, absolute paths, and dotfiles before touching " +
            "the filesystem, and oversized requests are refused early rather than buffered.",
        },
        {
          title: "Honest about limits",
          body:
            "The README documents known gaps, such as reaping child processes and HEAD " +
            "responses closing keep-alive, instead of hiding them. Knowing exactly where a " +
            "system falls short is part of owning it.",
        },
      ],
      next: [
        "Reap children with a SIGCHLD handler",
        "Honor keep-alive on HEAD responses",
        "Make keep-alive timeout, request cap, and backlog configurable",
      ],
    },
  },
  {
    slug: "fastapi-mongo-movies",
    repo: "fastapi-mongo-movies",
    title: "Full-Stack Movie App",
    kicker: "Product engineering",
    summary:
      "An end-to-end app with a layered FastAPI + MongoDB backend, a React frontend, " +
      "and rate limiting and metrics baked in.",
    highlights: [
      "Layered API → Service → Repository → Database backend on async Motor",
      "React + TypeScript frontend with TanStack Query caching",
      "Per-IP rate limiting plus request and database metrics",
    ],
    tags: ["Python", "FastAPI", "MongoDB", "React", "Docker"],
    image: moviesDemo,
    caseStudy: {
      problem:
        "Most CRUD demos stop at 'it returns JSON.' I wanted a full-stack app structured the " +
        "way a production service would be: clear layers, typed contracts, protection from " +
        "abusive clients, and enough instrumentation to know how it's behaving.",
      built: [
        "Feature routes for movies, genres, top-rated, recent, and search",
        "Async MongoDB access with connection pooling via Motor and Pydantic v2 schemas",
        "Global exception handlers mapping domain errors to 404 / 409 / 422 / 500",
        "Rate limiter at 100 requests per minute per IP",
        "Admin API for background poster-validation jobs",
        "Python tests for the backend and Playwright tests for the frontend",
      ],
      architecture: [
        { name: "api/routes/", role: "HTTP handling and validation" },
        { name: "services/", role: "Business logic and orchestration" },
        { name: "repositories/", role: "Query building and MongoDB operations" },
        { name: "core/middleware.py", role: "Request timing, IP, status metrics" },
        { name: "core/rate_limiter.py", role: "Per-IP throttling" },
      ],
      diagram: `client ──▶ middleware ──▶ rate limiter ──┬──▶ 429
            (timer, IP)     (100/min)     │
                                          ▼
                                  route ─▶ service
                                             │
                                             ▼
                                  repository ─▶ MongoDB
                                       │
                                       └──▶ metrics`,
      metrics: [
        { value: "4", label: "backend layers" },
        { value: "100/min", label: "per-IP rate limit" },
        { value: "5", label: "global exception handlers" },
        { value: "2", label: "test suites (pytest + Playwright)" },
      ],
      engineering: [
        {
          title: "Errors flow upward",
          body:
            "Repositories and services raise domain errors; a single set of handlers turns " +
            "them into consistent HTTP responses, so routes stay thin.",
        },
        {
          title: "Measure both sides",
          body:
            "Middleware records every request's method, path, status, and duration, while the " +
            "repository layer records each database operation, so slow pages can be traced " +
            "to slow queries.",
        },
      ],
    },
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
