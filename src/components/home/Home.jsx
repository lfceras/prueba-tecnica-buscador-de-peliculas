import './home.css'
import { Movies } from '../listOfMovies/ListOfMovies'
import { useMovies } from '../../hooks/useMovies'
import { useSearch } from '../../hooks/useSearch'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

export const Home = () => {
  const [sort, setSort] = useState(false)
  const { error, setQuery, query } = useSearch()
  const { results: mapedMovies, getMovies } = useMovies({ query, sort })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce((query) => {
      getMovies({ query })
    }, 500),
    [getMovies]
  )

  const handleChange = (e) => {
    const queryEvent = e.target.value
    if (queryEvent.startsWith(' ')) return
    setQuery(queryEvent)
    debouncedGetMovies(queryEvent)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ query })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies App</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            value={query}
            name='query'
            type='text'
            onChange={handleChange}
            placeholder='Wall-E, Matrix, Nemo....'
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
          />
          <input
            type='checkbox'
            name='sort'
            checked={sort}
            onChange={handleSort}
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies results={mapedMovies} />
      </main>
    </div>
  )
}
