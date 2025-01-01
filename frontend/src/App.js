import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer'
import NavBar from './layout/NavBar'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import { isLoggedIn, login, logout } from './utils/Auth'
import SeeMovieDetails from './pages/SeeMovieDetails'

function App() {
  const [searchText, setSearchText] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedInUser = isLoggedIn()
    if (loggedInUser) {
      setUser(loggedInUser)
    }
  }, [])

  const handleSearch = (searchQuery) => {
    setSearchText(searchQuery)
  }

  const handleLogin = (userData) => {
    setUser(userData)
    login(userData)
  }

  const handleLogout = () => {
    setUser(null)
    logout()
  }

  return (
    <BrowserRouter>
      <NavBar
        user={user}
        onSearch={handleSearch}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <Routes>
        <Route
          path="/"
          element={<Home searchText={searchText} user={user} />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route path="/movieDetails/:id" element={<SeeMovieDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
