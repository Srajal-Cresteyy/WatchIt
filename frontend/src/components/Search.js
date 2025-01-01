import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa' // Importing search icon from react-icons

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    const searchText = event.target.value
    setSearch(searchText)
    onSearch(searchText)
  }

  return (
    <div className="relative mx-5">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search for Movies"
        className="border-1 border-gray-500 text-gray-700 pl-10 pr-5 py-1 rounded-sm w-full transition-all focus:ring-2 focus:ring-gray-100 focus:outline-none"
        value={search}
        onChange={handleChange}
      />

      {/* Search Icon */}
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  )
}

export default Search
