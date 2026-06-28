import React from "react";
import { motion } from "framer-motion";
import { FeaturedProject } from "../../../types";
import { useGithubRepos, useTheme } from "../../../context";
import Tag from "../../ui/Tag";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  index: number;
}

const lightColors = [
  "from-primary-light to-secondary-light",
  "from-primary-light to-accent-light",
  "from-secondary-light to-primary-light",
  "from-accent-light to-primary-light",
  "from-secondary-light to-accent-light",
];

const darkColors = [
  "from-primary-dark to-secondary-dark",
  "from-primary-dark to-accent-dark",
  "from-secondary-dark to-primary-dark",
  "from-accent-dark to-primary-dark",
  "from-secondary-dark to-accent-dark",
];

function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const { theme } = useTheme();
  const palette = theme === "dark" ? darkColors : lightColors;
  const gradient = palette[index % palette.length];
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
      <div className="w-full flex flex-col md:flex-row">
        {/* {project.imgUrl && (
          <div className="w-full md:w-64 h-48 md:h-auto flex items-center justify-center flex-shrink-0">
            <img
              src={project.imgUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {!project.imgUrl && (
          <div
            className={`w-full md:w-64 h-48 md:h-auto bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-4xl text-white/50 font-mono">
              {project.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )} */}

        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-primary dark:text-primary-dark">
                <a
                  href={repo?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-primary-dark/80 transition-colors"
                >
                  {project.name}
                </a>
              </h3>
              {repo?.language && (
                <span className="text-xs text-muted dark:text-muted-dark font-mono flex-shrink-0 ml-2">
                  {repo.language}
                </span>
              )}
            </div>

            <p className="text-sm text-muted dark:text-muted-dark mb-4 line-clamp-2">
              {project.description}
            </p>

            {project.highlights && (
              <div className="mb-4 text-sm text-muted dark:text-muted-dark">
                Highlights:
                <ul className="list-disc list-outside ml-4 mb-4 text-sm text-muted dark:text-muted-dark">
                  {project.highlights?.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
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
    </motion.div>
  );
}

export default FeaturedProjectCard;
