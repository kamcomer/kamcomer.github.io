import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <SectionHeading className="mb-6">About Me</SectionHeading>
      <p className="text-muted dark:text-muted-dark text-lg leading-relaxed">
        [Your bio goes here. Talk about your background, skills, and interests.]
      </p>
    </div>
  );
};

export default About;
