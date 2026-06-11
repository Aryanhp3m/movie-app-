import { useEffect, useState } from 'react'
import {  useNavigate ,useParams } from 'react-router-dom'

function MovieDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchMovie() {


      try {
        setLoading(true)

        const apiKey = '57fafb319673fc13e2880336c840afb2'

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch movie')
        }

        const data = await response.json()
        setMovie(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  if (loading) {
    return <p>Loading movie...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <main>
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate('/')}>Home</button>

      <p>{movie.overview}</p>
    </main>
  )
}

export default MovieDetailPage