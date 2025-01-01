import React from 'react'
import MovieSessions from '../mockData/MovieSessions'
import FormatDate from '../utils/formatDate'
import SessionInfo from './SessionInfo'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie, hallNumber }) => {
  const movieSessions = MovieSessions(movie, hallNumber)

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col w-full lg:w-72 h-auto transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div className="relative h-72 w-full overflow-hidden rounded-t-xl">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="p-4 flex flex-col space-y-3">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          <Link
            to={`/movieDetails/${movie.id}`}
            className="hover:text-blue-500"
          >
            {movie.title}
          </Link>
        </h3>
        <div className="text-sm text-gray-500">
          <span>Release Date: {FormatDate(movie.release_date)}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <span className="font-semibold">Rating:</span>
          <span className="text-yellow-500">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
        <div className="mt-2">
          <SessionInfo movieSessions={movieSessions} movieId={movie.id} />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
