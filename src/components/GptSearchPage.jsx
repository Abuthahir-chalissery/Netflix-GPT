import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearchPage = () => {
  return (
    <div className='bg-black h-screen flex flex-col items-center '>
        <h1 className='slide-down text-white mb-20 text-5xl font-semibold border-2 p-2  rounded-2xl border-t-red-500 border-r-red-500'>Search <span className='text-red-500'>Movies</span> + GPT</h1>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage
