import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { useSelector } from 'react-redux'

const GptSearchPage = () => {

  const {movieResults}  = useSelector((store)=> store.gpt)

  // Flatten
  const flatMovies = movieResults?.flat();

  // Remove invalid movies
  const validMovies = flatMovies?.filter(movie => 
    movie &&
    movie.poster_path &&
    (movie.title && movie.title.length < 15  )

  )

  // Remove dubplicates
  const uniqueMoviesMap = new Map()
  validMovies?.forEach(movie => {
    if(!uniqueMoviesMap.has(movie.id)){
      uniqueMoviesMap.set(movie.id , movie)
    }
  })

  const uniqueMovies = Array.from(uniqueMoviesMap.values())

  // Pick first 5
  const pickMovies = uniqueMovies.slice(0,15);
  

  
  
  
  return (
    <div className={`bg-black p-5 md:p-0 min-h-screen ${pickMovies && "h-full"} flex flex-col items-center overflow-hidden`}>
        <h1 className='slide-down text-white mb-20 text-2xl md:text-5xl font-semibold border-2 p-2  rounded-2xl border-t-red-500 border-r-red-500'>Search <span className='text-red-500'>Movies</span> with Ai</h1>
        <GptSearchBar/>
        <div className='grid grid-cols-2 md:grid-cols-5  gap-5  lg:gap-2  mt-15 md:mt-0  md:p-20'>
          {pickMovies?.map((pickMovie, index)=>  <GptMovieSuggestions key={index} pickMovie={pickMovie}/>)}
        </div>
    </div>
  )
}

export default GptSearchPage
