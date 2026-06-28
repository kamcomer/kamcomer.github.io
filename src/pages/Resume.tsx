import SectionHeading from '../components/ui/SectionHeading'
import Tag from '../components/ui/Tag'

interface ResumeEntry {
  role: string
  company: string
  period: string
  location: string
  domain: string
  highlights: string[]
  stack: string[]
}

interface ResumeProject {
  name: string
  summary: string
  details: string[]
  stack: string[]
}

const resumeSummary = `Software engineer with professional experience building backend services,
distributed systems, and full-stack platform infrastructure in Python and C. I build systems
end-to-end across API design, async services, CI/CD, and observability, with a strong
foundation in low-level and embedded engineering.`

const experience: ResumeEntry[] = [
  {
    role: 'Software Engineer (Automation & Quality)',
    company: 'Synfinii',
    period: 'Apr 2023 - Oct 2025',
    location: 'Remote',
    domain: 'Fintech',
    highlights: [
      'Designed and built a greenfield four-service internal platform from scratch using Docker Compose, Python, MS SQL, and Vue.js with TypeScript.',
      'Owned CI/CD infrastructure end-to-end with a local Jenkins server and PR preview environments, reducing release regression cycles by 60%.',
      'Built async processing pipelines with Python async I/O and added structured logging, distributed tracing, and observability instrumentation for production debugging.',
      'Orchestrated thousands of automated test runs across isolated customer environments and authored reusable Python libraries adopted across multiple teams.',
      'Used FastAPI for REST API design and pandas and NumPy for internal data processing workflows while leading code reviews and maintaining documentation.',
    ],
    stack: [
      'Python',
      'Docker Compose',
      'MS SQL',
      'Vue.js',
      'TypeScript',
      'FastAPI',
      'Jenkins',
      'CI/CD',
      'Observability',
      'pandas',
      'NumPy',
    ],
  },
  {
    role: 'Embedded Test Engineer',
    company: 'Gentex',
    period: 'Dec 2020 - Jul 2024',
    location: 'Zeeland, MI',
    domain: 'Automotive',
    highlights: [
      'Built safety-critical embedded systems tooling in C, including hardware-in-the-loop simulation systems and GNU Make-based build tooling.',
      'Contributed to internal simulation tooling used to validate embedded image recognition systems for automotive safety applications.',
      'Performed protocol-level debugging across CAN, UDS, SPI, I2C, UART, and LIN interfaces with fuzz testing and memory analysis to harden firmware.',
      'Worked within ISO 26262-compliant automotive programs while maintaining and extending an internal PHP and Kubernetes-backed test tracking service.',
      'Supported a system hosting more than one million test case results and improved classification of safety and cybersecurity requirements for release decisions.',
    ],
    stack: [
      'C',
      'GNU Make',
      'CAN',
      'UDS',
      'SPI',
      'I2C',
      'UART',
      'LIN',
      'PHP',
      'Kubernetes',
      'ISO 26262',
    ],
  },
]

const projects: ResumeProject[] = [
  {
    name: 'kvstore',
    summary: 'Distributed key-value store implementing full Raft consensus from scratch.',
    details: [
      'Implemented leader election, log replication, snapshotting, and write-ahead logging with Python asyncio.',
      'Added a FastAPI HTTP and RPC layer and containerized the system for repeatable local cluster deployment.',
      'Tested failure and recovery scenarios on a 3-node Kubernetes cluster with a full pytest suite.',
    ],
    stack: ['Python', 'asyncio', 'Raft', 'FastAPI', 'Docker', 'Kubernetes', 'pytest'],
  },
  {
    name: 'fastapi-mongo-movies',
    summary: 'Full-stack CRUD application with API performance instrumentation.',
    details: [
      'Built a REST API with Python, FastAPI, and MongoDB plus a React frontend.',
      'Implemented search, filtering, and metrics capture for response times and rate limits.',
    ],
    stack: ['Python', 'FastAPI', 'MongoDB', 'React', 'Docker'],
  },
  {
    name: 'http-server',
    summary: 'Lightweight HTTP/1.1 server written in C.',
    details: [
      'Implemented request parsing, persistent keep-alive connections, and static file serving.',
      'Supported concurrent connections using non-blocking I/O and Linux socket primitives.',
    ],
    stack: ['C', 'HTTP/1.1', 'Non-blocking I/O', 'Linux sockets'],
  },
]

const skillGroups = [
  {
    label: 'Languages',
    values: ['Python', 'C/C++', 'TypeScript', 'JavaScript', 'SQL', 'PHP', 'Bash'],
  },
  {
    label: 'Backend',
    values: ['FastAPI', 'REST APIs', 'Async pipelines', 'Distributed systems', 'Observability'],
  },
  {
    label: 'Data',
    values: ['pandas', 'NumPy', 'MS SQL', 'MongoDB (projects)', 'PostgreSQL (projects)'],
  },
  {
    label: 'Frontend',
    values: ['Vue.js', 'TypeScript', 'React (projects)'],
  },
  {
    label: 'Infrastructure',
    values: ['Docker', 'Docker Compose', 'Kubernetes', 'Jenkins', 'CI/CD', 'AWS', 'Azure', 'Linux', 'Git'],
  },
  {
    label: 'Embedded',
    values: ['CAN', 'UDS', 'SPI/I2C', 'UART', 'LIN', 'HIL simulation', 'Fuzz testing', 'GNU Make'],
  },
]

const publicLinks = [
  {
    label: 'Email',
    value: 'kameroncomer@gmail.com',
    href: 'mailto:kameroncomer@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/kamcomer',
    href: 'https://github.com/kamcomer',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kameron-comer',
    href: 'https://www.linkedin.com/in/kameron-comer',
  },
]

function Resume() {
  return (
    <div className='max-w-6xl mx-auto py-6 md:py-10'>
      <section className='border border-borderMuted bg-bg2 dark:bg-bg2-dark'>
        <div className='grid border-b border-borderMuted lg:grid-cols-[1.4fr_0.6fr]'>
          <div className='border-b border-borderMuted p-6 lg:border-b-0 lg:border-r'>
            <p className='mb-3 text-xs uppercase tracking-[0.3em] text-primary dark:text-primary-dark'>
              Resume / Technical Profile
            </p>
            <h1 className='mb-4 text-3xl font-bold text-text dark:text-text-dark md:text-5xl'>
              Kameron Comer
            </h1>
            <p className='max-w-3xl text-sm leading-7 text-muted dark:text-muted-dark md:text-base'>
              {resumeSummary}
            </p>
          </div>

          <div className='grid grid-cols-1 divide-y divide-borderMuted'>
            <div className='p-6'>
              <p className='mb-2 text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark'>
                Focus
              </p>
              <p className='text-sm text-text dark:text-text-dark'>
                Backend systems, platform tooling, CI/CD, observability, and embedded-adjacent engineering.
              </p>
            </div>
            <div className='p-6'>
              <p className='mb-2 text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark'>
                Base
              </p>
              <p className='text-sm text-text dark:text-text-dark'>
                Remote, US.
              </p>
            </div>
            <div className='p-6'>
              <p className='mb-4 text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark'>
                Contact
              </p>
              <div className='space-y-3'>
                {publicLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className='block border border-borderMuted px-3 py-2 text-sm text-text transition-colors hover:bg-bg dark:text-text-dark dark:hover:bg-bg-dark'
                  >
                    <span className='mr-3 text-xs uppercase tracking-[0.2em] text-primary dark:text-primary-dark'>
                      {link.label}
                    </span>
                    <span className='break-all text-muted dark:text-muted-dark'>
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='mt-8 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]'>
        <div className='space-y-8'>
          <section className='border border-borderMuted bg-bg2 dark:bg-bg2-dark'>
            <div className='border-b border-borderMuted px-6 py-4'>
              <SectionHeading size='md' className='text-2xl md:text-3xl'>
                Experience
              </SectionHeading>
            </div>
            <div className='divide-y divide-borderMuted'>
              {experience.map((entry) => (
                <article key={`${entry.company}-${entry.role}`} className='p-6'>
                  <div className='mb-4 flex flex-col gap-3 border-b border-borderMuted pb-4 md:flex-row md:items-start md:justify-between'>
                    <div>
                      <h2 className='text-xl font-semibold text-text dark:text-text-dark'>
                        {entry.role}
                      </h2>
                      <p className='mt-1 text-sm text-primary dark:text-primary-dark'>
                        {entry.company} / {entry.domain}
                      </p>
                    </div>
                    <div className='text-left font-mono text-xs uppercase tracking-[0.2em] text-muted dark:text-muted-dark md:text-right'>
                      <div>{entry.period}</div>
                      <div className='mt-1'>{entry.location}</div>
                    </div>
                  </div>

                  <ul className='space-y-3 text-sm leading-7 text-muted dark:text-muted-dark'>
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className='border-l border-borderMuted pl-4'>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className='mt-5 flex flex-wrap gap-2'>
                    {entry.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className='border border-borderMuted bg-bg2 dark:bg-bg2-dark'>
            <div className='border-b border-borderMuted px-6 py-4'>
              <SectionHeading size='md' className='text-2xl md:text-3xl'>
                Selected Projects
              </SectionHeading>
            </div>
            <div className='divide-y divide-borderMuted'>
              {projects.map((project) => (
                <article key={project.name} className='p-6'>
                  <div className='mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between'>
                    <h2 className='text-xl font-semibold uppercase tracking-[0.12em] text-text dark:text-text-dark'>
                      {project.name}
                    </h2>
                    <p className='text-sm text-primary dark:text-primary-dark'>
                      {project.summary}
                    </p>
                  </div>

                  <ul className='space-y-3 text-sm leading-7 text-muted dark:text-muted-dark'>
                    {project.details.map((detail) => (
                      <li key={detail} className='border-l border-borderMuted pl-4'>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className='mt-5 flex flex-wrap gap-2'>
                    {project.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className='space-y-8'>
          <section className='border border-borderMuted bg-bg2 dark:bg-bg2-dark'>
            <div className='border-b border-borderMuted px-6 py-4'>
              <SectionHeading size='md' className='text-2xl'>
                Skills
              </SectionHeading>
            </div>
            <div className='divide-y divide-borderMuted'>
              {skillGroups.map((group) => (
                <div key={group.label} className='p-6'>
                  <p className='mb-4 text-xs uppercase tracking-[0.25em] text-primary dark:text-primary-dark'>
                    {group.label}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {group.values.map((value) => (
                      <Tag key={value}>{value}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className='border border-borderMuted bg-bg2 dark:bg-bg2-dark'>
            <div className='border-b border-borderMuted px-6 py-4'>
              <SectionHeading size='md' className='text-2xl'>
                Education
              </SectionHeading>
            </div>
            <div className='p-6'>
              <p className='text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark'>
                2015 - 2020
              </p>
              <h2 className='mt-3 text-xl font-semibold text-text dark:text-text-dark'>
                B.S. Electrical Engineering
              </h2>
              <p className='mt-1 text-sm text-primary dark:text-primary-dark'>
                Minor in Mathematics / Grand Valley State University
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume
