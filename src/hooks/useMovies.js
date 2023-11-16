import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ query, sort }) => {
  const [results, setResults] = useState([])
  const previousSearch = useRef(query)

  const getMovies = useCallback(async ({ query }) => {
    if (query === previousSearch.current) return

    previousSearch.current = query
    const newMovies = await searchMovies({ query })
    setResults(newMovies)
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...results]?.sort((a, b) => a.title.localeCompare(b.title))
      : results
  }, [results, sort])

  return {
    results: sortedMovies,
    getMovies
  }
}
