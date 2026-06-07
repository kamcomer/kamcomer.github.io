import React from 'react';
import AboutSection from '../components/About';
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
        <section id="about" className="py-12 scroll-mt-20">
          <AboutSection />
        </section>
        <section id="experience" className="py-12">
          <ExperienceTimeline />
        </section>
        <section id="projects" className="py-12">
          <FeaturedProjects />
        </section>
        <section id="skills" className="py-12">
          <Skills />
        </section>
        <section id="contact" className="py-12">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Home;
