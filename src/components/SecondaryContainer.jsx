import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  
  return (
    <div className='w-full h-full  bg-black md:pl-9 relative ' >
        <div className='w-full h-auto relative md:-top-50 flex flex-col  md:-mb-50 bg-transparent'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
          <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        </div>
        <div className='flex justify-center items-center h-10'>
          <h1 className=' text-sm text-gray-800'>Made with by codewithabutha</h1>
        </div>
    </div>
  ) 
}

export default SecondaryContainer




{/*
  Movies - Popular
    - Movies card *n
  Movies - Now Playing
  Movies - Trending
  Movies - Horror
*/}