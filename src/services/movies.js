export const searchMovies = async ({query})=>{
  if(query === '') return 

  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=b0296ee5`)
    const data = await response.json()

    const results = data.Search

    return results?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}