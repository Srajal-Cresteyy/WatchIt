import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SessionInfo = ({ movieSessions, movieId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null)

  const handleSessionSelect = (session) => {
    localStorage.setItem('movieSession', JSON.stringify(session))
    setSelectedSession(session) // Store the selected session
  }

  return (
    <div className="relative">
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full bg-gray-100 text-gray-800 rounded-lg p-2 hover:bg-gray-200 focus:outline-none"
      >
        <span className="font-semibold text-sm">
          {selectedSession
            ? `${selectedSession.time} (${selectedSession.language})`
            : 'Select a Session'}
        </span>
        <span
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {/* Popup Dropdown */}
      {isOpen && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white shadow-lg rounded-lg z-50 p-3">
          <ul>
            {movieSessions.map((session, index) => (
              <li key={index}>
                <Link
                  to={`/movie/${movieId}`}
                  onClick={() => handleSessionSelect(session)}
                  className="block bg-white text-black text-sm font-light p-2 my-1 border border-gray-200 rounded-lg text-left hover:bg-gray-200"
                >
                  <div className="flex justify-between items-center">
                    {/* Time on the left */}
                    <span>{session.time}</span>
                    {/* Language on the right */}
                    <span className="text-sm">{session.language}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SessionInfo
