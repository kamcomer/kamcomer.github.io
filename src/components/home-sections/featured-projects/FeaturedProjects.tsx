import React from "react";
import { Link } from "react-router-dom";
import { useGithubRepos } from "../../../hooks";
import { FEATURED_PROJECTS } from "../../../config/projects";
import SectionHeading from "../../ui/SectionHeading";
import StateMessage from "../../ui/StateMessage";
import FeaturedProjectCard from "./FeaturedProjectCard";

interface FeaturedProjectsProps {
  username?: string;
}

function FeaturedProjects({ username }: FeaturedProjectsProps) {
  const { repos, loading, error } = useGithubRepos({ username });

  if (loading)
    return (
      <StateMessage variant="loading">
        Loading featured projects...
      </StateMessage>
    );

  if (error) return <StateMessage variant="error">{error}</StateMessage>;

  const featured = repos.filter((repo) =>
    FEATURED_PROJECTS.includes(repo.name),
  );

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

      {featured.length === 0 ? (
        <p className="text-center py-12 text-muted dark:text-muted-dark">
          No featured projects found.
        </p>
      ) : (
        <div className="space-y-6">
          {featured.map((repo, index) => (
            <FeaturedProjectCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}

export default FeaturedProjects;
