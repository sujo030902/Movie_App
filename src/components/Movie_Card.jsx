import React from 'react'

const Movie_Card = () => {
  return (
    <>
        <div className='w-full px-2'>
            <h1 className='text-white text-3xl font-bold mt-12 text-left w-full'>Trending Movies</h1>
        </div> 
        <div className='w-full bg-black h-full px-4 py-6 flex gap-4 overflow-hidden'>
            <div className='border-2 w-1/2 h-[60%]'>
            </div>
            <div className='border-2 w-1/2 h-[60%]'>
            </div>
            <div className='border-2 w-1/2 h-[60%]'>
            </div>
        </div>
    </>
  )
}

export default Movie_Card;