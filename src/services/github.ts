import axios from "axios";
import { type CommitWeek, type GithubRepo } from "../types";

const GITHUB_API_BASE_URL = "https://api.github.com";

interface GithubReposResponse {
  repos: GithubRepo[];
}

const getGithubToken = (): string | undefined => {
  return import.meta.env.VITE_GITHUB_TOKEN;
};

export const fetchGithubRepos = async (
  username: string,
): Promise<GithubReposResponse> => {
  try {
    let allRepos: GithubRepo[] = [];
    let page = 1;
    const per_page = 100;
    let fetched: GithubRepo[];
    do {
      const headers: Record<string, string> = {};
      const reposResponse = await axios.get<GithubRepo[]>(
        `${GITHUB_API_BASE_URL}/users/${username}/repos`,
        { params: { per_page, page }, headers },
      );
      fetched = reposResponse.data;
      allRepos = allRepos.concat(fetched);
      page++;
    } while (fetched.length === per_page);
    return { repos: allRepos };
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    throw error;
  }
};

export const fetchGithubRepo = async (
  username: string,
  repoName: String,
): Promise<GithubRepo | null> => {
  try {
    const headers: Record<string, string> = {};
    const repoResponse = await axios.get<GithubRepo>(
      `${GITHUB_API_BASE_URL}/repos/${username}/${repoName}`,
      { headers },
    );
    return repoResponse.data;
  } catch (error) {
    console.error("Error fetching GitHub repository:", error);
    throw error;
  }
};

export const fetchGithubCommitHistory = async (
  username: string,
  year: number = new Date().getFullYear(),
): Promise<CommitWeek[]> => {
  try {
    let allRepos: GithubRepo[] = [];
    let page = 1;
    const per_page = 100;
    let fetched: GithubRepo[];
    do {
      const headers: Record<string, string> = {};
      const token = getGithubToken();
      if (token) headers["Authorization"] = `token ${token}`;
      const reposResponse = await axios.get<GithubRepo[]>(
        `${GITHUB_API_BASE_URL}/users/${username}/repos`,
        { params: { per_page, page }, headers },
      );
      fetched = reposResponse.data;
      allRepos = allRepos.concat(fetched);
      page++;
    } while (fetched.length === per_page);
    const repos = allRepos;

    const weekData: CommitWeek[] = Array.from({ length: 52 }, () => ({
      days: [0, 0, 0, 0, 0, 0, 0],
    }));
    const endOfYear = new Date(year, 11, 31, 23, 59, 59, 999);
    const startOfYear = new Date(year, 0, 1);

    await Promise.all(
      repos.map(async (repo) => {
        try {
          const headers: Record<string, string> = {};
          const token = getGithubToken();
          if (token) headers["Authorization"] = `token ${token}`;
          const activityRes = await axios.get<
            Array<{ week: number; total: number; days: number[] }>
          >(
            `${GITHUB_API_BASE_URL}/repos/${username}/${repo.name}/stats/commit_activity`,
            { headers },
          );
          const activity = activityRes.data;
          if (Array.isArray(activity) && activity.length > 0) {
            activity.forEach((week) => {
              const weekStart = new Date(week.week * 1000);
              if (weekStart >= startOfYear && weekStart <= endOfYear) {
                week.days.forEach((count, d) => {
                  const weekOfYear = Math.floor(
                    (weekStart.getTime() - startOfYear.getTime()) /
                      (7 * 24 * 60 * 60 * 1000),
                  );
                  if (weekOfYear >= 0 && weekOfYear < 53) {
                    weekData[weekOfYear].days[d] += count;
                  }
                });
              }
            });
          }
        } catch {
          // Ignore errors for individual repos
        }
      }),
    );

    while (
      weekData.length > 0 &&
      weekData[weekData.length - 1].days.every((v) => v === 0)
    ) {
      weekData.pop();
    }

    const fullYearWeeks: CommitWeek[] = Array.from(
      { length: 52 },
      (_, i) => weekData[i] || { days: [0, 0, 0, 0, 0, 0, 0] },
    );
    return fullYearWeeks;
  } catch (error) {
    console.error("Error fetching commit history:", error);
    throw error;
  }
};
