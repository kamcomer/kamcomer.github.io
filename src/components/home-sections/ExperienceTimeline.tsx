import React from 'react';
import { motion } from 'framer-motion';
import { experiences, Experience } from '../../config/experience';
import SectionHeading from '../ui/SectionHeading';
import Tag from '../ui/Tag';

const getTypeColor = (type: Experience['type']): string => {
  switch (type) {
    case 'work': return 'border-primary dark:border-primary-dark';
    case 'education': return 'border-secondary dark:border-secondary-dark';
    case 'project': return 'border-success dark:border-success-dark';
    default: return 'border-primary dark:border-primary-dark';
  }
};

const getTypeLabel = (type: Experience['type']): string => {
  switch (type) {
    case 'work': return 'Work';
    case 'education': return 'Education';
    case 'project': return 'Project';
  }
};

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-12">
      <SectionHeading size="md" className="md:text-3xl mb-8">
        Experience
      </SectionHeading>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-borderMuted dark:bg-borderMuted md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-bg2 dark:bg-bg2-dark border-2 border-primary dark:border-primary-dark -translate-x-1/2 z-10" />

              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              }`}>
                <div className={`bg-bg2 dark:bg-bg2-dark border-l-4 ${getTypeColor(exp.type)} p-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-muted dark:text-muted-dark">
                      {getTypeLabel(exp.type)}
                    </span>
                    <span className="text-xs text-muted dark:text-muted-dark font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-text dark:text-text-dark">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-primary dark:text-primary-dark mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted dark:text-muted-dark mb-3">
                    {exp.description}
                  </p>
                  
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
