import { social } from "../data/profile"

export interface GithubStats {
  publicRepos: number
  languages: { name: string; count: number }[]
  lastPush: Date | null
}

interface RepoResponse {
  fork: boolean
  language: string | null
  pushed_at: string
}

const fallback: GithubStats = { publicRepos: 0, languages: [], lastPush: null }

let cached: Promise<GithubStats> | undefined

function isRepoList(data: unknown): data is RepoResponse[] {
  return Array.isArray(data) && data.every((r) => typeof r === "object" && r && "fork" in r)
}

async function load(): Promise<GithubStats> {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" }
  const token = import.meta.env.GITHUB_TOKEN
  if (token) headers.Authorization = `Bearer ${token}`

  try {
    const res = await fetch(
      `https://api.github.com/users/${social.github}/repos?per_page=100&type=owner`,
      { headers, signal: AbortSignal.timeout(8000) },
    )
    if (!res.ok) throw new Error(`GitHub responded ${res.status}`)
    const data: unknown = await res.json()
    if (!isRepoList(data)) throw new Error("Unexpected GitHub response shape")

    const repos = data.filter((r) => !r.fork)
    const counts = new Map<string, number>()
    for (const r of repos) {
      if (r.language) counts.set(r.language, (counts.get(r.language) ?? 0) + 1)
    }
    const languages = [...counts]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
    const lastPush = repos
      .map((r) => new Date(r.pushed_at))
      .sort((a, b) => b.getTime() - a.getTime())[0] ?? null

    return { publicRepos: repos.length, languages, lastPush }
  } catch (err) {
    // Never fail the build over decorative stats
    console.warn("[github] stats unavailable, using fallback:", err)
    return fallback
  }
}

/** Fetched once per build and shared by every page */
export function getGithubStats(): Promise<GithubStats> {
  cached ??= load()
  return cached
}
