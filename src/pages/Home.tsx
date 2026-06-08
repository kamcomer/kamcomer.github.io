import React from "react";
import AboutSection from "../components/home-sections/AboutSection";
import Skills from "../components/home-sections/Skills";
import ContactForm from "../components/home-sections/ContactForm";
import FeaturedProjects from "../components/home-sections/featured-projects/FeaturedProjects";
import ExperienceTimeline from "../components/home-sections/ExperienceTimeline";
import Terminal from "../components/terminal/Terminal";

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
