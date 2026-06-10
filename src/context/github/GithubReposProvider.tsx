import React, { useState, useEffect, useCallback } from 'react'
import { fetchGithubRepos } from '../../services/github'
import { GithubRepo } from '../../types'
import { GithubReposContext, GithubReposContextValue } from './GithubReposContext'

interface GithubReposProviderProps {
  children?: React.ReactNode
}

const GithubReposProvider: React.FC<GithubReposProviderProps> = ({ children }) => {
  const username = import.meta.env.VITE_GITHUB_USERNAME as string
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [fetchTrigger, setFetchTrigger] = useState(0)

  useEffect(() => {
    let cancelled = false

    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetchGithubRepos(username)
        if (!cancelled) {
          setRepos(response.repos)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : 'Failed to fetch GitHub repos'
          setError(message)
          setLoading(false)
        }
      }
    }

    fetchData()
    return () => { cancelled = true }
  }, [username, fetchTrigger])

  const refetch = useCallback(() => {
    setFetchTrigger(n => n + 1)
  }, [])

  const getRepoByName = useCallback((name: string) => {
    return repos.find(r => r.name === name)
  }, [repos])

  const value: GithubReposContextValue = {
    repos,
    getRepoByName,
    loading,
    error,
    refetch,
  }

  return (
    <GithubReposContext.Provider value={value}>
      {children}
    </GithubReposContext.Provider>
  )
}

export { GithubReposProvider }
