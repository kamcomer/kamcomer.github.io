import React from "react";
import { useGithubRepos } from "../hooks";
import SectionHeading from "../components/ui/SectionHeading";
import StateMessage from "../components/ui/StateMessage";
import ProjectCard from "../components/ui/ProjectCard";

const Projects = () => {
  const { repos, loading, error } = useGithubRepos();

  if (loading)
    return (
      <div className="max-w-6xl mx-auto py-8">
        <SectionHeading className="mb-8">My GitHub Projects</SectionHeading>
        <StateMessage variant="loading">
          Loading GitHub projects...
        </StateMessage>
      </div>
    );

  if (error)
    return (
      <div className="max-w-6xl mx-auto py-8">
        <SectionHeading className="mb-8">My GitHub Projects</SectionHeading>
        <StateMessage variant="error">{error}</StateMessage>
      </div>
    );

  if (repos.length === 0)
    return (
      <div className="max-w-6xl mx-auto py-8">
        <SectionHeading className="mb-8">My GitHub Projects</SectionHeading>
        <p className="text-center py-12 text-muted dark:text-muted-dark">
          No projects found.
        </p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto py-8">
      <SectionHeading className="mb-8">My GitHub Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} project={repo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
