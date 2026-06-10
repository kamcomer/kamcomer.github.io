import { createContext, useContext } from 'react'
import { GithubRepo } from '../../types'

export interface GithubReposContextValue {
  repos: GithubRepo[]
  getRepoByName: (name: string) => GithubRepo | undefined
  loading: boolean
  error: string | null
  refetch: () => void
}

export const GithubReposContext = createContext<GithubReposContextValue | null>(null)

export function useGithubRepos(): GithubReposContextValue {
  const context = useContext(GithubReposContext)
  if (!context) {
    throw new Error('useGithubRepos must be used within a GithubReposProvider')
  }
  return context
}
