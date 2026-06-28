import React from "react";
import { motion } from "framer-motion";
import { FeaturedProject } from "../../../types";
import { useGithubRepos } from "../../../context";
import Tag from "../../ui/Tag";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  index: number;
}

function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const { getRepoByName } = useGithubRepos();
  const repo = getRepoByName(project.name);
  const displayedLanguages =
    repo?.topLanguages?.length ? repo.topLanguages.slice(0, 2) : repo?.language ? [repo.language] : [];
  const normalizedDisplayedLanguages = displayedLanguages.map((language) =>
    language.toLowerCase(),
  );
  const visibleTechTags = normalizedDisplayedLanguages.length > 0
    ? project.techTags.filter(
        (tag) => !normalizedDisplayedLanguages.includes(tag.toLowerCase()),
      )
    : project.techTags;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col md:flex-row bg-bg2 dark:bg-bg2-dark border border-borderMuted dark:border-borderMuted"
    >
      <div className="w-full flex flex-col md:flex-row">
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
              {displayedLanguages.length > 0 && (
                <div className="ml-2 flex flex-shrink-0 flex-wrap justify-end gap-2">
                  {displayedLanguages.map((language) => (
                    <span
                      key={language}
                      className="border border-borderMuted px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-muted dark:text-muted-dark"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p className="text-sm leading-7 text-muted dark:text-muted-dark mb-4">
              {project.description}
            </p>

            {project.highlights && (
              <div className="mb-4 text-sm text-muted dark:text-muted-dark">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary dark:text-primary-dark">
                  Why it matters
                </p>
                <ul className="space-y-2 border-l border-borderMuted pl-4 text-sm leading-7 text-muted dark:text-muted-dark">
                  {project.highlights?.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {visibleTechTags.map((tag, idx) => (
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
