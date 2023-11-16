/* eslint-disable react/prop-types */
import './listOfMovies.css'
export const ListOfMovies = ({ results }) => {
  return (
    <ul className="movies">
      {results.map((result) => (
        <li className="movie" key={result.id}>
          <h3>{result.title}</h3>
          <p>{result.year}</p>
          <img src={result.image} alt={result.title} loading='lazy' />
        </li>
      ))}
    </ul>
  )
}

const NoMoviesResult = () => {
  return <p>No hay resultados para esta busqueda</p>
}

export const Movies = ({ results }) => {
  const hasMovies = results?.length > 0

  return hasMovies ? <ListOfMovies results={results} /> : <NoMoviesResult />
}
