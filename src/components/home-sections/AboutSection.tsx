import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../../config'
import SectionHeading from '../ui/SectionHeading';

const quickLinks = [
  { to: '/#experience', label: 'Experience' },
  { to: '/#projects', label: 'Projects' },
  { to: '/#contact', label: 'Contact' },
]

const AboutSection = () => {
  return (
    <div className="border border-borderMuted bg-bg2 dark:bg-bg2-dark">
      <div className="grid border-b border-borderMuted lg:grid-cols-[1.35fr_0.65fr]">
        <div className="border-b border-borderMuted p-6 lg:border-b-0 lg:border-r">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary dark:text-primary-dark">
            Home / Positioning
          </p>
          <SectionHeading className="mb-4 text-3xl md:text-4xl" accent={false}>
            {personalInfo.tagline}
          </SectionHeading>
          <p className="max-w-3xl text-base leading-8 text-muted dark:text-muted-dark whitespace-pre-line">
            {personalInfo.bio}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="border border-borderMuted px-3 py-2 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-bg dark:text-primary-dark dark:hover:bg-bg-dark"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid divide-y divide-borderMuted">
          <div className="p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
              What I Work On
            </p>
            <p className="text-sm leading-7 text-text dark:text-text-dark">
              Backend services, internal developer platforms, distributed systems, and embedded-adjacent tooling.
            </p>
          </div>
          <div className="p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
              Base
            </p>
            <p className="text-sm text-text dark:text-text-dark">
              {personalInfo.location}
            </p>
          </div>
          <div className="p-6">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
              Next
            </p>
            <p className="mb-4 text-sm leading-7 text-text dark:text-text-dark">
              For full experience, stack details, and project depth, view the resume.
            </p>
            <Link
              to="/resume"
              className="inline-flex items-center border border-primary px-4 py-2 text-sm font-mono text-primary transition-colors hover:bg-bg dark:border-primary-dark dark:text-primary-dark dark:hover:bg-bg-dark"
            >
              View resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
