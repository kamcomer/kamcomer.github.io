import React from "react";
import { motion } from "framer-motion";
import { FeaturedProject } from "../../../types";
import { useGithubRepos } from "../../../context";
import Tag from "../../ui/Tag";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  index: number;
}

const placeholderColors = [
  "from-primary/40 to-secondary/40",
  "from-secondary/40 to-primary/40",
  "from-primary/30 to-accent/30",
  "from-accent/30 to-primary/30",
  "from-secondary/30 to-accent/30",
];

function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const gradient = placeholderColors[index % placeholderColors.length];
  const { getRepoByName, loading, error } = useGithubRepos();
  const repo = getRepoByName(project.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col md:flex-row bg-bg2 dark:bg-bg2-dark border border-borderMuted dark:border-borderMuted"
    >
      {loading && <div>Loading project data...</div>}
      {error && <div>Error loading project data.</div>}
      {repo && (
        <div className="w-full flex flex-col md:flex-row">
          <div
            className={`w-full md:w-64 h-48 md:h-auto flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-4xl text-white/50 font-mono">
              {project.name.charAt(0).toUpperCase()}
            </span>
          </div>

          <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-primary dark:text-primary-dark">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary/80 dark:hover:text-primary-dark/80 transition-colors"
                  >
                    {project.name}
                  </a>
                </h3>
                {repo.language && (
                  <span className="text-xs text-muted dark:text-muted-dark font-mono flex-shrink-0 ml-2">
                    {repo.language}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted dark:text-muted-dark mb-4 line-clamp-2">
                {repo.description || "No description provided."}
              </p>

              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((topic) => (
                    <Tag key={topic} size="sm">
                      {topic}
                    </Tag>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-mono border border-primary dark:border-primary-dark text-primary dark:text-primary-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-colors"
              >
                GitHub
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-mono bg-gradient-primary dark:bg-gradient-primary-dark text-white dark:text-bg-dark hover:opacity-90 transition-opacity"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default FeaturedProjectCard;
