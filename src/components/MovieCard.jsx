import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    
  return (
    <div className=' flex justify-center  items-center h-auto flex-shrink-0 hover:scale-110 transition-transform duration-300 ease-out z-100 '>
        <img className='w-40  h-auto rounded-md' src={IMG_CDN_URL + posterPath} alt="MovieImage" />
    </div>
  )
}

export default MovieCard
