import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../../ui/SectionHeading";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { featuredProjects } from "../../../config";

interface FeaturedProjectsProps {
  username?: string;
}

function FeaturedProjects({ username }: FeaturedProjectsProps) {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <SectionHeading size="md" className="md:text-3xl">
          Projects
        </SectionHeading>
        <Link
          to="/projects"
          className="text-sm font-mono text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80 transition-colors"
        >
          View all projects →
        </Link>
      </div>

      {featuredProjects.length === 0 ? (
        <p className="text-center py-12 text-muted dark:text-muted-dark">
          No featured projects found.
        </p>
      ) : (
        <div className="space-y-6">
          {featuredProjects.map((project, index) => {
            return (
              <FeaturedProjectCard
                key={project.name + index}
                project={project}
                index={index}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default FeaturedProjects;
