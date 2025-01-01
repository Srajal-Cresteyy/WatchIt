import React, { useEffect, useState } from 'react'
import FetchMoviesByGenre from '../API/FetchMoviesByGenre'
import GetRecommendedMovies from '../API/GetRecommendedMovies'
import { isLoggedIn } from '../utils/Auth'
import Genres from './Genre'
import RecommendedMovieCard from './RecommendedMovieCard'

const genres = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Family: 10751,
  Fantasy: 14,
  Mystery: 9648,
  ScienceFiction: 878,
  Drama: 18,
  Horror: 27,
  Thriller: 53,
  Music: 10402,
  History: 36,
  War: 10752,
  Romance: 10749,
  Crime: 80,
}

const RecommendedMovies = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [recommendedMovies, setRecommendedMovies] = useState([])
  const [userId, setUserId] = useState(null)
  const [genreIds, setGenreIds] = useState([])
  const userLoggedIn = isLoggedIn()

  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN || ''

  // Fetch movies by genre
  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      if (genreIds.length > 0) {
        const response = await FetchMoviesByGenre(ACCESS_TOKEN, page, genreIds)
        if (response) {
          const { filteredMovies, totalPages } = response
          setMovies(filteredMovies)
          setTotalPages(totalPages)
        }
      }
    }
    fetchMoviesByGenre()
  }, [page, genreIds, ACCESS_TOKEN])

  // Fetch recommended movies based on user preferences
  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      if (userId) {
        const recommendedMoviesData = await GetRecommendedMovies(userId)
        if (
          recommendedMoviesData &&
          recommendedMoviesData.movieGenres.length > 0
        ) {
          const recommendedGenres = Object.keys(genres).filter((genre) =>
            recommendedMoviesData.movieGenres.includes(genre)
          )
          const recommendedGenreIds = recommendedGenres.map(
            (genre) => genres[genre]
          )
          setRecommendedMovies(recommendedMoviesData)
          setGenreIds(recommendedGenreIds)
        }
      }
    }
    fetchRecommendedMovies()
  }, [userId])

  useEffect(() => {
    if (userLoggedIn) {
      setUserId(userLoggedIn.userId)
    }
  }, [userLoggedIn])

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const startIndex = page - 1
  const displayedMovies = movies.slice(startIndex, startIndex + 6)

  return (
    <div className="container mx-auto px-20 py-4">
      {userLoggedIn && recommendedMovies.movieGenres?.length > 0 && (
        <div>
          <h1 className="text-left font-bold mb-4">Recommended Movies</h1>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {displayedMovies.map((movie, index) => (
                <RecommendedMovieCard
                  key={movie.id}
                  movie={movie}
                  hallNumber={index}
                />
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePrevPage}
              className={`bg-red-500 hover:bg-red-700 text-white rounded px-3 py-1 text-sm font-semibold mx-2 my-2 cursor-pointer ${
                page === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className={`bg-red-500 hover:bg-red-700 text-white rounded px-3 py-1 text-sm font-semibold mx-2 my-2 cursor-pointer ${
                page === totalPages ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RecommendedMovies
