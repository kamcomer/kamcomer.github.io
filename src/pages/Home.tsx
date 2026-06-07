import React from 'react';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import FeaturedProjects from '../components/FeaturedProjects';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Terminal from '../components/terminal/Terminal';

const Home = () => {
  return (
    <div>
      <Terminal />
      <div className="max-w-6xl mx-auto divide-y divide-borderMuted dark:divide-borderMuted">
        <ExperienceTimeline />
        <FeaturedProjects />
        <div id="skills" className="py-12">
          <Skills />
        </div>
        <div id="contact" className="py-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
