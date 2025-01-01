import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FetchMovieDetails from '../API/GetMovieDetails'
import SeatPlan from '../components/SeatPlan'
import FormatDate from '../utils/formatDate'
import FormatRuntime from '../utils/formatRuntime'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const API_KEY = process.env.REACT_APP_API_KEY || ''

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await FetchMovieDetails(id, API_KEY)
      setMovie(movieData)
    }

    fetchData()
  }, [id, API_KEY])

  if (!movie) {
    return <div className="text-center text-lg font-semibold">Loading...</div>
  }

  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Movie Poster */}
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Movie Info */}
          <div className="w-full md:w-2/3 px-6 py-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {movie.title}
            </h2>
            <p className="text-lg text-gray-700 mb-4">{movie.overview}</p>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-2 bg-gray-300 rounded-full text-sm">
                {movie.genres.map((genre) => genre.name).join(', ')}
              </span>
            </div>

            {/* Movie Details */}
            <div className="space-y-3">
              <p>
                <strong>Tagline:</strong> {movie.tagline}
              </p>
              <p>
                <strong>Runtime:</strong> {FormatRuntime(movie.runtime)}
              </p>
              <p>
                <strong>Rating:</strong> {movie.vote_average.toFixed(1)}
              </p>
              <p>
                <strong>Release Date:</strong> {FormatDate(movie.release_date)}
              </p>
              <p>
                <strong>Production Companies:</strong>{' '}
                {movie.production_companies
                  .map((company) => company.name)
                  .join(', ')}
              </p>
              <p>
                <strong>Production Countries:</strong>{' '}
                {movie.production_countries
                  .map((country) => country.name)
                  .join(', ')}
              </p>
              <p>
                <strong>Spoken Languages:</strong>{' '}
                {movie.spoken_languages
                  .map((lang) => lang.english_name)
                  .join(', ')}
              </p>
              <p>
                <strong>Budget:</strong> ${movie.budget.toLocaleString()}
              </p>
              <p>
                <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
              </p>

              {/* Visit Homepage */}
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition duration-200"
              >
                Visit Homepage
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Seat Plan */}
      <SeatPlan movie={movie} />
    </div>
  )
}

export default MovieDetails
