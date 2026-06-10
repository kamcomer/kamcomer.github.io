import useFetch from "../useFetch";
import { fetchGithubRepo } from "../../services/github";
import { GithubRepo } from "../../types";

interface UseGithubRepoOptions {
  username?: string;
  repoName: string;
}

interface UseGithubRepoReturn {
  repo: GithubRepo | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useGithubRepo(options: UseGithubRepoOptions): UseGithubRepoReturn {
  const { username = import.meta.env.VITE_GITHUB_USERNAME, repoName } = options;
  const { data, loading, error, refetch } = useFetch(
    () => fetchGithubRepo(username, repoName),
  );

  return {
    repo: data ?? null,
    loading,
    error,
    refetch,
  };
}

export default useGithubRepo;
