import React from 'react';
import { personalInfo } from '../../config'
import SectionHeading from '../ui/SectionHeading';

const AboutSection = () => {
  return (
    <>
      <SectionHeading className="mb-6">About Me</SectionHeading>
      <p className="text-muted dark:text-muted-dark text-lg leading-relaxed whitespace-pre-line">
        {personalInfo.bio}
      </p>
    </>
  );
};

export default AboutSection;
