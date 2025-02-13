import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {

  const [search, setSearch] = useState();

  function handleSearch(e){
    setSearch(e.target.value);
  }

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center px-2'>
      <h1 className='text-4xl text-center'>Bookmarks Your <span className='text-purple-400'>Favourite Movies</span> For Binge Watching
      <Search search = {search} handleSearch = {handleSearch} />
      </h1>
      <h1>{search}</h1>
      </div>
    </>
  )
}

export default App
