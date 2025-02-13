import React from 'react'

const Search = ({search, handleSearch}) => {
  return (
    <>
      <input type="text"
      placeholder='Enter Your Movie Name...'
      onChange={handleSearch}
      value={search}
      className='border-2 text-2xl mt-20 px-4 py-4 rounded-3xl border-purple-800 w-full'/>
    </>
  )
}

export default Search